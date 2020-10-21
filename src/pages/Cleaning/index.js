import React from 'react';
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

export default function Cleaning() {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Bucket width={250} height={250} style={{ margin: 40 }} />
      <Description>Realizando Limpeza, aguarde...</Description>
      <ReportContainer>
        <ReportText>Tempo gasto: </ReportText>
        <ReportText>Tempo restante: </ReportText>
      </ReportContainer>
    </View>
  );
}
