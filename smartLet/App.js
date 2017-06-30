import React from 'react';
import { StyleSheet, Text, Button, View, Picker, TextInput, Switch, Keyboard, SlidingView, KeyboardAvoidingView } from 'react-native';

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

  render() {
    return (
      <KeyboardAvoidingView 
      style={styles.container}
      behavior="padding"
      >
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

      </KeyboardAvoidingView>
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
