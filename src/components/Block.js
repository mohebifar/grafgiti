import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setFocused } from 'redux/modules/calendar';
import { verticalCellSpacing, horizontalCellSpacing } from 'config';

@connect(
  undefined,
  {setFocused}
)
export default class Block extends Component {
  static propTypes = {
    position: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    }),
    value: PropTypes.number.isRequired,
    focused: PropTypes.bool.isRequired
  };

  handleClick = () => {
    const { position: { x, y } } = this.props;
    this.props.setFocused({x, y});
  };

  render() {
    const { position: { x, y }, value, focused } = this.props;
    const blockClasses = [];

    if (focused) {
      blockClasses.push(classes.focused);
    } else {
      blockClasses.push(classes.normal);
    }

    return (<element
      left={(1 + horizontalCellSpacing) * x}
      top={(1 + verticalCellSpacing) * y}>
      <text
        clickable={true}
        onClick={this.handleClick}
        class={blockClasses}
        style={{fg: levels[value]}}
      >
        ◼
      </text>
      {
        focused ? <text
          style={{fg: 'red'}}
          left={1}
        >
          ◀
        </text> : null
      }
    </element>);
  }
}

const levels = [
  "#343434",
  "#2e643d",
  "#589f43",
  "#b9fc04",
  "#98bc21"
];

const classes = {
  focused: {
    style: {
      blink: true
    }
  },
  normal: {
    style: {
      blink: false
    }
  }
};
