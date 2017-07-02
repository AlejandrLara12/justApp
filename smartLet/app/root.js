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



export default class Root extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    };

  }



  render() {
    return (
      <View style={styles.container} >
        <Text>This is root.js</Text>
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
