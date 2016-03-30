import React, { Component } from 'react';

export default class Help extends Component {
  render() {
    return (<box
      class={classes.bordered}
      label="Help"
      bottom={3}
      width="100%"
      height={tips.length + 2}
    >
      <list
        items={tips}
        interactive={false}
      />
    </box>);
  }
}

const tips = [
  '* Use arrow keys to move the cursor around.',
  '* Press 0, 1, 2, 3, 4 keys on each cell, 0 being blank and 4 being dark green.',
  '* Press C-0, C-1, C-2, C-3, C-4 to fill all the cells with the corresponding value.',
  '* Press C-right, C-left, C-up, C-down to move all the cells in the direction.',
  '* Press K to clear the wall.',
  '* Press D when you\'re done with your grafgiti to do the commits.'
];

const classes = {
  bordered: {
    border: {
      type: 'line'
    },
    style: {
      border: {
        fg: 'blue'
      }
    }
  }
};
