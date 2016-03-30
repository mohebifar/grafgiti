import React from 'react';
import { render as reactBlessedRender } from 'react-blessed';
import blessed from 'blessed';
import winston from 'winston';
import App from 'components/App';
import createStore from 'redux/create';
import { Provider } from 'react-redux';
import { logFile } from 'config';
import assignKeyEvents from 'helpers/keyEvents';

const store = createStore();

const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: 'Grafgiti'
});

assignKeyEvents(screen, store);

winston.add(winston.transports.File, {filename: logFile});
winston.remove(winston.transports.Console);

winston.log('info', 'Grafgiti started.');

const element = <Provider store={store}><App /></Provider>;

reactBlessedRender(element, screen);
