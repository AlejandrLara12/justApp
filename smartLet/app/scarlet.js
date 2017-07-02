import React from 'react';
import { 
  StyleSheet, 
  Text, 
  Button, 
  View, 
  TextInput, 
  Switch, 
  Keyboard, 
  SlidingView, 
  KeyboardAvoidingView,
  Navigator,
  Component 
} from 'react-native';



export default class Scarlet extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    };

  }


  render() {
    return (
      <View style={styles.container} >
        <Text>This is scarlet.js</Text>
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
