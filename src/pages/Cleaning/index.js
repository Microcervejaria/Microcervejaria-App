import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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

  const [remaingSecs, setRemaingSecs] = useState(0);
  const [elapsedSecs, setElapsedSecs] = useState(CLEANING_TIME);
  const [isActive, setIsActive] = useState(true);
  const rHours = getTime(remaingSecs).hours;
  const rMins = getTime(remaingSecs).mins;
  const rSecs = getTime(remaingSecs).secs;
  const eHours = getTime(elapsedSecs).hours;
  const eMins = getTime(elapsedSecs).mins;
  const eSecs = getTime(elapsedSecs).secs;

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setRemaingSecs(remaingSecs => remaingSecs + 1);
        setElapsedSecs(elapsedSecs => elapsedSecs - 1);
      }, 1000);
    } else if (!isActive && remaingSecs !== 0 && elapsedSecs !== CLEANING_TIME) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, remaingSecs, elapsedSecs]);

  return (
    <View style={styles.container}>
      <Bucket width={250} height={250} style={{ margin: 40 }} />
      <Description>Realizando Limpeza, aguarde...</Description>
      <ReportContainer>
        <ReportText>Tempo gasto: {`${rHours}:${rMins}:${rSecs}`}</ReportText>
        <ReportText>Tempo restante: {`${eHours}:${eMins}:${eSecs}`}</ReportText>
      </ReportContainer>
    </View>
  );
}
