import React, { Component } from 'react';
import { Router, Scene,Tabs,Stack,Actions } from 'react-native-router-flux';
import HomeScreen from './HomeScreen';
import ExpenseScreen from './ExpenseScreen';
import WalletScreen from './WalletScreen';
import ProfileScreen from'./ProfileScreen';
import {
 StyleSheet
} from 'react-native'


const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: 'white',
  },

});
    const RouterComponent = Actions.create(
      <Scene key='root' tabs={true}>
        <Scene key='tab1' title='Home' component={HomeScreen} />
        <Scene key='tab2' title='Expense' component={ExpenseScreen} />
        <Scene key='tab3' title='Wallet' component={WalletScreen} />
        <Scene key='tab4' title='Profile' component={ProfileScreen} />

      </Scene>
    );

export default RouterComponent