import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const ProfileScreen = () => {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
  
        <Text onPress={() => this.onPressNewScreen()}>
          Profile Screen
               </Text>
  
      </View>
  
    )
  
  }

  export default ProfileScreen