import React from 'react';
import Main from '../pages/Main';

import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

export default function AppRoutes() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Main" component={Main} />
    </AppStack.Navigator>
  );
};
