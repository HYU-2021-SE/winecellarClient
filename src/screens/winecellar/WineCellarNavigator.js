import React from 'react';
import { MyWineCellar } from './WineCellar';
import { MyWineCellarSetting } from './WineCellarSetting';
import { createStackNavigator } from '@react-navigation/stack';
import WineRegistration from './WineRegistration';
import Camera from '../../utils/Camera';

const WineCellarStack = createStackNavigator();

export const WineCellarStackNavigator = () => {
  return (
    <WineCellarStack.Navigator screenOptions={{ headerShown: false }}>
      <WineCellarStack.Screen name="MyWineCellar Home" component={MyWineCellar} />
      <WineCellarStack.Screen name="MyWineCellar Setting" component={MyWineCellarSetting} />
      <WineCellarStack.Screen name="MyWineCellar Registration" component={WineRegistration} />
      <WineCellarStack.Screen name="Camera" component={Camera} />
    </WineCellarStack.Navigator>
  );
};
