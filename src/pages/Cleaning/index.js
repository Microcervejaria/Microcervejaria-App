import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import API from '../../services/api';
import {
  Description,
  ReportContainer,
  ReportText
 } from './styles';
import Bucket from '../../assets/icons/bucket';

const CLEANING_TIME = 5;  // Tempo para testes. TODO: Corrigir para tempo real de 7200.

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14213D',
    alignItems: 'center',
  }
});

export default function Cleaning(props) {
  const { navigate } = useNavigation();
  const { expoPushToken } = props.route.params;
  const [loading, setLoading] = useState(true);
  const [remaingSecs, setRemaingSecs] = useState(CLEANING_TIME);
  const { hours, mins, secs } = getTime(remaingSecs);

  async function sendPushNotification() {
    await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: expoPushToken,
        sound: 'default',
        title: 'Limpeza',
        body: 'O processo de limpeza foi finalizado.',
      }),
    });
  }

  function getTime(time) {
    function formatNumber(number) {
      return `0${number}`.slice(-2);
    }

    const hours = Math.floor(time / 3600);
    const mins = Math.floor((time % 3600) / 60);
    const secs = Math.ceil((time % 3600) % 60);
    return { hours: formatNumber(hours), mins: formatNumber(mins), secs: formatNumber(secs) };
  }

  function getResponse() {
    const data = { "nomeReceita": "" };
    const headers = { headers: { "Authorization": "cervejaria" } };
    API.post(`limpeza`, data, headers)
       .then(() => setLoading(false))
       .catch(error => console.log(error));
  }

  useEffect(() => {
    let interval = null;

    if (loading) {
      getResponse()
    }

    interval = setInterval(() => {
      if (remaingSecs === 0) {
        sendPushNotification();
        navigate("Receitas");
      } else {
        setRemaingSecs(remaingSecs => remaingSecs - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [remaingSecs]);

  return (
    <View style={styles.container}>{
    !loading && (
      <View>
        <Bucket width={250} height={250} style={{ margin: 40 }} />
        <Description>Realizando Limpeza, aguarde...</Description>
        <ReportContainer>
          <ReportText>Tempo restante: {`${hours}:${mins}:${secs}`}</ReportText>
        </ReportContainer>
      </View>
    )}
    </View>
  );
}
