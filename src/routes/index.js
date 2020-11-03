import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeScreen } from 'react-native-screens';

import SignIn from '../pages/SignIn';
import RecipeFormPage from '../pages/RecipeForm';
import QRCodeReader from '../pages/QRCodeReader';
import Main from '../pages/Main';
import Cleaning from '../pages/Cleaning';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#FCA311',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        {/* <Screen name="Sign In" component={SignIn} options={{ headerShown: false }} /> */}
        {/* <Screen name="Leitura do QR Code" component={QRCodeReader} options={{ headerBackTitle: "Voltar" }} /> */}
        {/* <Screen name="Main" component={Main} options={{ headerBackTitle: "Sair" }} /> */}
        {/* <Screen name="Formulário de Receita" component={RecipeFormPage} /> */}
        <Screen name="Limpeza" component={Cleaning} options={{ headerBackTitle: "Voltar" }} />
      </Navigator>
    </NavigationContainer>
  );
}
