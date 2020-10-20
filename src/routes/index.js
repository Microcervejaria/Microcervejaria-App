import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main';
import SignIn from '../pages/SignIn';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#FCA311',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Screen name="Main" component={Main} />
        <Screen name="SignIn" component={SignIn} />
      </Navigator>
    </NavigationContainer>
  );
}
