/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import RouterComponent from "./Routers"


const App = () => {
  return (
    <RouterComponent/>

    //   <View style={{flex:1,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
    // <Text style={{justifyContent:'center',alignItems:'center'}}>Ashwani Rajput</Text>
    //   </View>  

  );
};

const styles = StyleSheet.create({
 
  
});

export default App;
