import winston from 'winston';
import moment from 'moment';
import { defaultCoefficient } from 'config';
import { put, select } from 'redux-saga/effects';
import { dummyCommit } from 'utils/git';
import { setProgress, setWorking } from './progress';

// Actions
export const INITIALIZE = 'calendar/INITIALIZE';
export const MOVE = 'calendar/MOVE';
export const SET_FOCUS = 'calendar/SET_FOCUS';
export const INCREASE_VALUE = 'calendar/INCREASE_VALUE';
export const SET_VALUE = 'calendar/SET_VALUE';
export const SET_ALL_VALUE = 'calendar/SET_ALL_VALUE';
export const COMMIT = 'calendar/COMMIT';

// Initial state
const initialStore = {
  coefficient: defaultCoefficient,
  days: [],
  focused: null
};

// Reducer
export default function reducer(state = initialStore, action) {
  switch (action.type) {
    case INITIALIZE:
      const days = prepareDays();

      return {
        ...state,
        days
      };
    case INCREASE_VALUE:
      state.focused.value = (state.focused.value + 1) % 5;

      return {
        ...state,
        days: [
          ...state.days
        ]
      };
    case SET_VALUE:
      state.focused.value = action.value;

      return {
        ...state,
        days: [
          ...state.days
        ]
      };
    case SET_FOCUS:
      let toFocus = state.days.find(
        ({position}) => position.x === action.x && position.y === action.y
      );

      if (toFocus) {
        if (state.focused) {
          state.focused.focused = false;
        }

        toFocus.focused = true;
      } else {
        toFocus = state.focused;
      }

      return {
        ...state,
        focused: toFocus
      };
    case MOVE:
      const { position } = state.focused;
      const vector = getMovementVector(action.direction);

      const destinationPosition = {
        x: position.x + vector.x,
        y: position.y + vector.y
      };

      let destination = state.days.find(
        ({position: dayPosition}) =>
        dayPosition.x === destinationPosition.x && dayPosition.y === destinationPosition.y
      );

      if (destination) {
        state.focused.focused = false;
        destination.focused = true;
      } else {
        destination = state.focused;
      }

      return {
        ...state,
        focused: destination
      };
    case SET_ALL_VALUE:
      state.days.forEach(day => {
        day.value = action.value;
      });

      return {
        ...state,
        days: [
          ...state.days
        ]
      };
    default:
      return state;
  }
}

// Action creators

// Initialize days
export function initialize() {
  return {
    type: INITIALIZE
  };
}

// Set focused day for editing
export function setFocused({x, y}) {
  return {
    type: SET_FOCUS,
    x,
    y
  };
}

// Move the cursor
export function move(direction) {
  return {
    type: MOVE,
    direction
  };
}

export function increaseValue() {
  return {
    type: INCREASE_VALUE
  };
}

export function setValue(value) {
  return {
    type: SET_VALUE,
    value: Number(value)
  };
}

export function setAllValue(value) {
  return {
    type: SET_ALL_VALUE,
    value: Number(value)
  };
}

export function clear() {
  return {
    type: SET_ALL_VALUE,
    value: 0
  };
}

export function commit() {
  return {
    type: COMMIT
  };
}

// Sagas

// Watch for initialization to set the default focused day
export function *watchInitialize() {
  yield put(setFocused({x: 1, y: 1}));
}

// Watch for committing request
export function *watchCommit() {
  const coefficient = yield select(state => state.calendar.coefficient);
  const days = yield select(state => state.calendar.days);
  let allCommits = yield select(
    state => state.calendar.days.reduce((value, day) => value + day.value, 0)
  );
  yield put(setWorking());
  allCommits *= coefficient;
  let commitsDone = 0;

  for (const day of days) {
    const commitsCount = day.value * coefficient;
    for (let i = 0; i < commitsCount; i++) {
      winston.info('commit', `Committing for the day ${day.time.format('YYYY-MM-DD')}`);
      yield dummyCommit(day);
      commitsDone++;
      yield put(setProgress(commitsDone / allCommits));
    }
  }

  yield put(setWorking(false));
}

function getMovementVector(direction) {
  const vector = {x: 0, y: 0};

  if (direction === 'left') {
    vector.x = -1;
  } else if (direction === 'right') {
    vector.x = 1;
  } else if (direction === 'up') {
    vector.y = -1;
  } else if (direction === 'down') {
    vector.y = 1;
  }

  return vector;
}

function prepareDays() {
  const start = moment().subtract(1, 'years').startOf('week');
  const end = start.clone().add(52, 'weeks');
  const days = [];
  const day = start.clone();
  let index = 0;

  while (day.isBefore(end)) {
    const y = index % 7;
    const x = Math.floor(index / 7);

    days.push({
      time: day.clone(),
      value: 0,
      focused: false,
      id: index,
      position: {
        x,
        y
      }
    });

    day.add(1, 'days');
    index++;
  }

  return days;
}
