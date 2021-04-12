import React, { PropTypes, Component } from 'react';
import ReactNative from 'react-native';
import Theme from '../../res/styles/them.style.js';

export default class Text extends Component {

  getProps() {
    const { fontSize, fontWeight, fontColor } = this.props;
    return {
      fontSize,
      fontWeight,
      fontColor,
    };
  }

  render() {
    return (
      <ReactNative.Text {...this.getProps()}>{this.props.children}</ReactNative.Text>
    );
  }
}

Text.propTypes = {
  fontSize: PropTypes.oneOf([
    Theme.FONT_SIZE_SMALL,
    Theme.FONT_SIZE_MEDIUM,
    Theme.FONT_SIZE_LARGE,
  ]),
  fontWeight: PropTypes.oneOf([
    Theme.FONT_WEIGHT_LIGHT,
    Theme.FONT_WEIGHT_MEDIUM,
    Theme.FONT_WEIGHT_HEAVY,
  ]),
  fontColor: PropTypes.oneOf([
    Theme.HEADING_COLOR,
    Theme.PRIMARY_TEXT_COLOR,
    Theme.SECONDARY_TEXT_COLOR,
    Theme.BASE_COLOR,
  ]),
};

Text.defaultProps = {
  fontSize: Theme.FONT_SIZE_MEDIUM,
  fontWeight: Theme.FONT_WEIGHT_LIGHT,
  fontColor: Theme.PRIMARY_TEXT_COLOR,
};
