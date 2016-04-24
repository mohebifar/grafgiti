import React, { Component } from 'react';
import Designer from './Designer';
import Help from './Help';
import ProgressBar from './ProgressBar';

export default class App extends Component {
  render() {
    return (<element>
      <Designer />
      <Help />
      <ProgressBar />
    </element>);
  }
}
