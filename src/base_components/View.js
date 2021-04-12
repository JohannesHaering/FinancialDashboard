import React, { PropTypes, Component } from 'react';
import ReactNative, {StyleSheet, Text} from 'react-native';
import Theme from '../../res/styles/theme.styles.js';

export default class View extends Component {

  getProps() {
    const { backgroundColor } = this.props;
    return {
      backgroundColor,
    };
  }

  render() {
    return (
      <ReactNative.View style={this.getProps()}>
        {this.props.children}
        <Text>tetetete</Text>
      </ReactNative.View>
    );
  }
}

// View.propTypes = {
//   backgroundColor: PropTypes.oneOf([
//     Theme.PRIMARY_COLOR,
//     Theme.PRIMARY_COLOR_DARK,
//     Theme.ACCENT_COLOR,
//     Theme.BASE_COLOR,
//   ]),
// };

View.defaultProps = {
  backgroundColor: Theme.BASE_COLOR,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555555',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
