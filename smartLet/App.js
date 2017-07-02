import React from 'react';
import { 
  StyleSheet, 
  Text, 
  Button, 
  View, 
  Picker, 
  TextInput, 
  Switch, 
  Keyboard, 
  SlidingView, 
  KeyboardAvoidingView,
  Navigator,
  Component 
} from 'react-native';

import scarlet from './app/scarlet';


export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      switchValue: true,
      inputValue: "",
      temp: 21
    };
    this.handleToggleSwitch = this.handleToggleSwitch.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleButtonPress = this.handleButtonPress.bind(this);
  }

  handleToggleSwitch = () => this.setState(state => ({
    switchValue: !state.switchValue
  }));

  handleTextChange = inputValue => {
    this.setState({ inputValue });
  };

  handleButtonPress = function(){
    let newTemp = this.state.inputValue;
    console.log("this is cool " + newTemp);
    if(newTemp){
      this.setState({ temp: newTemp, inputValue: "" });
    }
  };

  /*
    <KeyboardAvoidingView 
      style={styles.container}
      //behavior="padding"
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={false}
  */
  render() {
    return (
      <View style={styles.container} >
        <Text>La temperatura es: {this.state.temp} ºC</Text>

        <Switch
          onValueChange={this.handleToggleSwitch}
          value={this.state.switchValue}
        />

        <TextInput
          value={this.state.inputValue}
          onChangeText={this.handleTextChange}
          style={{ width: 200, height: 44, padding: 8 }}
          keyboardType="numeric"
          placeholder="Temp"
        />

        <Button
          title="Press me"
          onPress={this.handleButtonPress}
        />

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

