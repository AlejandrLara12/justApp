import React from 'react';
// import React, { Component } from 'react'; // that is what they is in Documentation
import { StyleSheet, Text, View, Image, AppRegistry } from 'react-native';

// classes
class Greeting extends React.Component{
  render(){
    return (
      <Text>Hello {this.props.name}!</Text>  
    );
  };
}


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Uses this.props.name</Text>
        <Text>It also create a class named in this case Greeting</Text>
        <Greeting name="Mireya"/>
        <Greeting name="Lara"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


/**
 * Notes:
 * 
 * Props might be with in the tag
 */