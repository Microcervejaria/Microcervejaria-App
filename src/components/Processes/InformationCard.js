import React, { Component } from 'react';
import {View, Text} from 'react-native';
import {InformationCardView, InformationCardText} from './styles';

export default function InformationCard(props) {
  return (
    <InformationCardView>
      <InformationCardText>Temperatura atual: {props.temperatura}°C</InformationCardText>
      <InformationCardText>Tempo restante: {props.tempoRestante} min</InformationCardText>
    </InformationCardView>
  );
}
