
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const HomeScreen = () => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>

      <Text onPress={() => this.onPressNewScreen()}>
        Home Screen
             </Text>

    </View>

  )

}
onPressNewScreen = () => {
  return (
    Actions.gray()
  )
}
export default HomeScreen;
