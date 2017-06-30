import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Button } from 'react-native';

export class List extends React.Component {
  render() {
    let titleText = `Favorite ${this.props.type}`;
    if (this.props.children instanceof Array) {
    	titleText += 's';
    }
    return (
      <View>
        <Text>{titleText}</Text>
        {this.props.children}
      </View>
    );
  }
}