import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';


class Menu extends Component {
  constructor() {
    super();
    this.state = {currentlySelected: 'overview'};
  }

  render() {
    return (
      <View style={styles.container}>
        <MenuItem id="overview" title="Overview" onClick={this.handleClick}
          selected={this.currentlySelected == 'overview' ? true : false}/>
        <MenuItem id="cash" title="Cash" onClick={this.handleClick}
          selected={this.currentlySelected == 'cash' ? true : false}/>
        <MenuItem id="stocks" title="Stocks" onClick={this.handleClick}
          selected={this.currentlySelected == 'stocks' ? true : false}/>
        <MenuItem id="cryptos" title="Cryptos" onClick={this.handleClick}
          selected={this.currentlySelected == 'cryptos' ? true : false}/>
        <MenuItem id="others" title="Others" onClick={this.handleClick}
          selected={this.currentlySelected == 'others' ? true : false}/>
      </View>
    );
  }

  handleClick(id) {
    this.setState({
      currentlySelected: id
    });
  }
}

class MenuItem extends Component {

  render() {
    return (
      <Text style={[styles.item, this.props.selected ? styles.selectedItem : styles.notSelectedItem]}
         onPress={() => this.props.onClick(this.props.id)}>{this.props.title}</Text>
    );
  }

  onClick() {
    alert('You tapped me');
  }
}

export default Menu;

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#ff5722',
      flexDirection: 'row',
  },
  item: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    padding: 3,
    borderLeftColor: '#bdbdbd',
    borderRightColor: '#bdbdbd',
    borderTopColor: '#bdbdbd',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 0,
  },
  selectedItem: {
    color: '#ffffff',
  },
  notSelectedItem: {
    color: '#212121',
  },
});
