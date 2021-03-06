import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { WineCellarStackNavigator } from './WineCellarNavigator';
import { InstagramShare } from '../share/InstagramShare';
import CellarLock, { LockScreen } from '../lock/CellarLock';
import { WinecellarProvider } from '../../context/WinecellarContext';
import { LockNavigator } from '../lock/LockNavigator';
import { ShareNavigator } from '../share/ShareNavigator';

const Tab = createBottomTabNavigator();

export const WineTab = () => {
  return (
    <WinecellarProvider>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            // focused: bool, 클릭했는지 여부
            switch (route.name) {
              case 'WineCellar':
                iconName = 'home-thermometer';
                break;
              case 'Registration':
                iconName = 'plus';
                break;
              case 'Lock':
                iconName = 'lock';
                break;
              case 'Share':
                iconName = 'share-variant';
                break;
              case 'Recommend':
                iconName = 'alarm-light';
                break;
              default:
                iconName = 'star-outline';
            }
            return <MaterialCommunityIcons size={size} name={iconName} color={color} />;
          },
        })}>
        <Tab.Screen name="WineCellar" component={WineCellarStackNavigator} />
        <Tab.Screen name="Lock" component={LockNavigator} />
        {/* <Tab.Screen name="Registration" component={WineRegisterStackNavigator} /> 와인 추가 기능 */}
        {/* <Tab.Screen name="Recommendation" component={WineRecommendationStackNavigator} /> Wine Recommend 기능 */}
        <Tab.Screen name="Share" component={ShareNavigator} />
      </Tab.Navigator>
    </WinecellarProvider>
  );
};
