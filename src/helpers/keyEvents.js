import { move, increaseValue, setValue, setAllValue, commit } from 'redux/modules/calendar';
import blessed from 'blessed';

export default function assignKeyEvents(screen, store) {
  screen.key(['escape', 'q', 'C-c'], () => process.exit(0));

  ['up', 'right', 'down', 'left'].forEach(direction => {
    screen.key(direction, () => {
      store.dispatch(move(direction));
    });
  });

  ['0', '1', '2', '3', '4', '5'].forEach(value => {
    screen.key(value, () => {
      store.dispatch(setValue(value));
    });
  });

  screen.key(['k', ')'], () => {
    store.dispatch(setAllValue(0));
  });

  screen.key('!', () => {
    store.dispatch(setAllValue(1));
  });

  screen.key('@', () => {
    store.dispatch(setAllValue(2));
  });

  screen.key('#', () => {
    store.dispatch(setAllValue(3));
  });

  screen.key('$', () => {
    store.dispatch(setAllValue(4));
  });

  screen.key('BS', () => {
    store.dispatch(setValue(0));
  });

  screen.key('space', () => {
    store.dispatch(increaseValue());
  });

  screen.key('d', () => {
    store.dispatch(commit());
  });
}