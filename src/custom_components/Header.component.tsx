import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';


class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>Financial Dashboard</Text>
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff5722',
    padding: 15,
  },
  headline: {
    fontSize: 24,
    color: '#ffffff',
  }
});
