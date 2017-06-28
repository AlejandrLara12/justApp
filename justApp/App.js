import React from 'react';
// import React, { Component } from 'react'; // that is what they is in Documentation
import { StyleSheet, Text, View, Image, AppRegistry } from 'react-native';

export default class App extends React.Component {
  render() {

    let pic = {
      uri: 'https://www.yamaha-motor.ca/images/pages/products/units/MC/large/2017_FZ09A_red_3_l.png'
    };

    return (
      <View style={styles.container}>
        <Image source={pic}  style={{ width: 300, height: 250 }} />
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
