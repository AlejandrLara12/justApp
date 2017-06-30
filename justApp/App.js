import React from 'react';
// import React, { Component } from 'react'; // that is what they is in Documentation
import { StyleSheet, Text, View, AppRegistry, Button } from 'react-native';

//  Classes   ---------------------
import { Blink } from './components/Blink.js';
import { List } from './components/List.js';



//  Main Program   ---------------------
export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      count: 0,
      numbsTest: ['one','two','three']
    };
    this.addOne = this.addOne.bind(this);
  }

  addOne(){
    console.log('Pressed count: ' + this.state.count );
    //let newCount = ++this.state.count;
    //console.log('Pressed newCount: ' + newCount );
    //newCount++;
    this.setState({ count: ++this.state.count });
  }


  render() {

    return (
      <View style={styles.container}>
        <Text>Button clicks</Text>
        <Blink text={this.state.count}/>
        <Text>{this.state.count}</Text>
        <Text>times</Text>
        <Button onPress={this.addOne} />
        <Button title="This is cool" onPress={this.addOne} />
        
        <List type='Living Musician'>
          <Text>Sachiko M</Text>
          <Text>Harvey Sid Fisher</Text>
        </List>

      </View>
    );
  }
}

Button.defaultProps = { title: "Add one" };

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

  - ES6 Intro: https://hacks.mozilla.org/2015/08/es6-in-depth-modules/


  New props

  this.props.children

  ClassName.defaultProps = { propOne: 'Cool' };

 */