import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Button } from 'react-native';

export class Blink extends React.Component{

  constructor(props){
    super(props);
    this.state = { 
      showText: true
    };

    // Toggle the state every second
    let timer = 500;
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    },timer);
  };

  render(){
    let display = this.state.showText ? this.props.text : ' + ';
    //console.log(this.props);
    return (
      <Text>{display}</Text>  
    );
  };
}