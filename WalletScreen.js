import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const WalletScreen = () => {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
  
        <Text onPress={() => this.onPressNewScreen()}>
          Wallet Screen
               </Text>
  
      </View>
  
    )
  
  }

  export default WalletScreen