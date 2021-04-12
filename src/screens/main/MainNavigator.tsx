import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Header from '../../custom_components/Header.component.tsx';
import Menu from '../../custom_components/Menu.component.tsx';


class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Menu />
        <Text> Hello this is main </Text>
      </View>
    );
  }
}

export default Main;

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#ffffff',
      flex: 1
  }
});
