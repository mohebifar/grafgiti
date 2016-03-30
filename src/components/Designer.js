import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initialize } from 'redux/modules/calendar';
import { width, height } from 'config';
import Block from './Block';

@connect(
  state => ({
    days: state.calendar.days,
    focused: state.calendar.focused
  }),
  {initialize}
)
export default class Designer extends Component {
  componentWillMount() {
    this.props.initialize();
  }

  render() {
    const { days } = this.props;

    return (<box
      label="Contributions"
      class={classes.bordered}
      width={width}
      height={height}
    >
      {
        days.map(day => <Block key={day.id} {...day} />)
      }
    </box>);
  }
}

const classes = {
  bordered: {
    border: {
      type: 'line',
      bold: true
    },
    style: {
      shadow: true,
      border: {
        fg: 'cyan'
      }
    }
  }
};
