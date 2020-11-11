import React, { useEffect, useState, useRef } from 'react';
import { AsyncStorage, ScrollView, TouchableOpacity, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

import RecipeCard from '../../components/RecipeCard/index';
import API from '../../services/api';
import { element } from 'prop-types';

import Cleaning from '../../assets/icons/cleaning.svg';
import Play from '../../assets/icons/play.svg';
import AddEditRecipe from '../../assets/icons/addEditRecipe.svg';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14213D',
  },
});

export default function Main({ route }) {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  const [data, setData] = useState(0);
  const [loading, setLoading] = useState(true);

  const { navigate } = useNavigation();

  function getExpoPushToken() {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    }
  }

  async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }

    return token;
  }

  async function getResponse() {
    const token = await AsyncStorage.getItem('Token');
    if (token) {
      const response = await API.get(`receitas`, { headers: { "Authorization": token } });
      setData(response.data);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!expoPushToken) getExpoPushToken();
    getResponse();
  }, [route]);

  return (
    <View style={styles.container}>{
      !loading && (
        <View>
          <View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              decelerationRate="fast"
            >{
              data.map(recipe => (<RecipeCard key={recipe.nome} data={recipe} />))
            }</ScrollView>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPressOut={() => navigate('Formulário de Receita', { nome: null })}>
              <AddEditRecipe width={60} height={60} style={{ marginRight: 30}} />
            </TouchableOpacity>
            <TouchableOpacity onPressOut={ () => navigate("Processos")}>
              <Play width={120} height={120} />
            </TouchableOpacity>
            <TouchableOpacity onPressOut={ () => navigate("Limpeza", { expoPushToken }) }>
              <Cleaning width={60} height={60} style={{ marginLeft: 30 }} />
            </TouchableOpacity>
          </View>
        </View>
      )
    }</View>
  );
}
