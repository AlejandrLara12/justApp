import React from 'react';
// import React, { Component } from 'react'; // that is what they is in Documentation
import { StyleSheet, Text, View, AppRegistry, Button } from 'react-native';

//  Classes   ========================================================================
class Blink extends React.Component{

  constructor(props){
    super(props);
    this.state = { showText: true };

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

class ButtonCounter extends React.Component{

  constructor(props, context) {
    super(props, context);
    this.state = {
      count: 0
    };
  };

  
  addCounter(){
    console.log('Pressed ' + this.state.count.toString() );
    this.state.count++;
  }

  render(){
    return (
      <Button
        title="Please"
        style={{fontSize: 20, color: 'green'}}
        styleDisabled={{color: 'red'}}
        color="#841584"
        onPress={() => this.addCounter()}
        />
    );
  };

}






//  Main Program   ========================================================================
export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Button clicks</Text>
        <Blink text="12" />
        <Text>times</Text>
        <ButtonCounter />
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