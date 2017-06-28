import React from 'react';
// import React, { Component } from 'react'; // that is what they is in Documentation
import { StyleSheet, Text, View, AppRegistry } from 'react-native';

// classes
class Blink extends React.Component{

  constructor(props){
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    let timer = 500;
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    },timer);
  };

  render(){

    let display = this.state.showText ? this.props.text : ' lol ';

    return (
      <Text>{display}</Text>  
    );
  };
}


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Blink text='text: is a prop of the <Text> component' />
        <Blink text='That is cool.' />
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
  Notes: 
  
  - Look at redux

  - React.Component API

 */