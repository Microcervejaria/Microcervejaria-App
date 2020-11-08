import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import API from '../../services/api';

import {
  Description,
  ReportContainer,
  ReportText
 } from './styles';
import Bucket from '../../assets/icons/bucket';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14213D',
    alignItems: 'center',
  }
});

const formatNumber = number => `0${number}`.slice(-2);

const getTime = (time) => {
  const hours = Math.floor(time / 3600);
  const mins = Math.floor((time % 3600) / 60);
  const secs = Math.ceil((time % 3600) % 60);
  return { hours: formatNumber(hours), mins: formatNumber(mins), secs: formatNumber(secs) };
}

export default function Cleaning() {
  const { navigate } = useNavigation();

  const CLEANING_TIME = 7200;

  const [loading, setLoading] = useState(true);
  const [remaingSecs, setRemaingSecs] = useState(CLEANING_TIME);
  const [isActive, setIsActive] = useState(true);
  const rHours = getTime(remaingSecs).hours;
  const rMins = getTime(remaingSecs).mins;
  const rSecs = getTime(remaingSecs).secs;

  async function getResponse() {
    setLoading(true);
    const response = await API.post(`limpeza`, { headers: { "Authorization": "cervejaria" }});
    setLoading(false);
  }

  useEffect(() => {
    let interval = null;

    if (isActive && remaingSecs === CLEANING_TIME) {
      getResponse()
    }

    if (isActive) {
      interval = setInterval(() => {
        if (remaingSecs === 0) {
          setIsActive(false);
          navigate("Main");
        } else {
          setRemaingSecs(remaingSecs => remaingSecs - 1);
        }
      }, 1000);
    } else if (!isActive && remaingSecs !== CLEANING_TIME) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, remaingSecs]);

  return (
    !loading && (
    <View style={styles.container}>
      <Bucket width={250} height={250} style={{ margin: 40 }} />
      <Description>Realizando Limpeza, aguarde...</Description>
      <ReportContainer>
        <ReportText>Tempo restante: {`${rHours}:${rMins}:${rSecs}`}</ReportText>
      </ReportContainer>
    </View>
    )
  );
}
