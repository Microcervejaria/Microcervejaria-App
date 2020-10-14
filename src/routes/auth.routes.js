import React from 'react';
import SingIn from '../pages/SignIn';

import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

export default function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn" component={SingIn} />
    </AuthStack.Navigator>
  );
};
