import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

@connect(
  state => ({
    progress: state.progress.progress,
    working: state.progress.working
  })
)
export default class ProgressBar extends Component {
  static propTypes = {
    progress: PropTypes.number,
    working: PropTypes.bool.isRequired
  };

  render() {
    const { progress, working } = this.props;

    return (<box
      class={classes.bordered}
      bottom={0}
      width="100%"
      height={3}
    >
      {
        working ?
          <progressbar
            filled={progress * 100}
            class={classes.progressBar}
          /> :
          <text>Press D to commit your grafgiti.</text>
      }
    </box>);
  }
}

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
  },
  progressBar: {
    style: {
      bar: {
        bg: 'green'
      }
    }
  }
};
