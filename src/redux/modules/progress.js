export const SET_PROGRESS = 'progress/SET_PROGRESS';
export const SET_WORKING = 'progress/SET_WORKING';
export const RESET = 'progress/RESET';

const initialState = {
  progress: 0,
  working: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROGRESS:
      return {
        ...state,
        progress: action.progress
      };
    case SET_WORKING:
      return {
        ...state,
        working: action.value
      };
    case RESET:
      return {
        ...state,
        progress: 0
      };
    default:
      return state;
  }
}

export function setProgress(progress) {
  return {
    type: SET_PROGRESS,
    progress
  };
}

export function setWorking(value = true) {
  return {
    type: SET_WORKING,
    value
  };
}
