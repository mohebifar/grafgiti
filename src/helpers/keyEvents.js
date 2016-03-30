import { move, increaseValue, setValue, commit } from 'redux/modules/calendar';

export default function assignKeyEvents(screen, store) {
  screen.key(['escape', 'q', 'C-c'], () => process.exit(0));

  [
    'up',
    'right',
    'down',
    'left'
  ].forEach(direction => screen.key(direction, () => store.dispatch(move(direction))));

  screen.key('space', () => store.dispatch(increaseValue()));

  [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5'
  ].forEach(value => screen.key(value, () => store.dispatch(setValue(value))));

  screen.key('backspace', () => store.dispatch(setValue(0)));
  screen.key('d', () => store.dispatch(commit()));
}