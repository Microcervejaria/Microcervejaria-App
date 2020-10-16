import React from 'react';
import Main from '../pages/Main';

import { createStackNavigator } from '@react-navigation/stack';

const myNewBackgroundColor = '#FCA311';
const AppStack = createStackNavigator();


export default function AppRoutes() {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FCA311',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <AppStack.Screen
        name="Main"
        component={Main}
      />
    </AppStack.Navigator>
  );
};
