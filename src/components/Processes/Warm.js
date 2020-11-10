import React, { Component, useEffect } from 'react';
import {View, Text} from 'react-native';
import {ProcessLabel, WarmView, WarmLabel} from './styles';
import ThermometerProcess from '../../assets/icons/thermometerProcess.svg';
import ClockProcess from '../../assets/icons/clockProcess.svg';

export default function WarmProcess(props) {
  return (
    <>
      <View>
        <ProcessLabel>Aquecimento</ProcessLabel>
      </View>
      <WarmView>
        <ThermometerProcess/>
        <WarmLabel>Temperatura esperada: {props.data.etapas[0].temperatura}°C</WarmLabel>
      </WarmView>
      <WarmView>
        <ClockProcess/>
        <WarmLabel>Tempo decorrido: {props.data.tempoAtual} min</WarmLabel>
      </WarmView>
  </>
  );
}
