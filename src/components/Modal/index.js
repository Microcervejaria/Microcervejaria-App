import React, { Component, useEffect, useState } from 'react';
import { View, Button, Text, TouchableOpacity } from 'react-native';
import { set } from 'react-native-reanimated';

import Alert from '../../assets/icons/alert.svg';
import Interrogation from '../../assets/icons/interrogation.svg';

import {
  ModalCard,
  Row,
  NoButton,
  NoButtonText,
  YesButton,
  YesButtonText,
  DescriptionText,
} from './styles';

export default function Modal(props) {
  const [icon, setIcon] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    switch (props.type) {
      case 'iniciarProcesso':
        setIcon('Interrogation');
        setDescription('Deseja iniciar o processo?');
        break;
      case 'iniciarLimpeza':
        setIcon('Interrogation');
        setDescription('Deseja iniciar a limpeza?');
        break;
      case 'finalizarEdicao':
        setIcon('Interrogation');
        setDescription('Deseja finalizar a edição?');
        break;
      case 'encerrarProcesso':
        setIcon('Alert');
        setDescription('Deseja encerrar o processo?');
        break;
      default:
        setIcon('Alert');
        setDescription('Modal não configurada.');
        break;
    }
  }, []);

  return (
    <ModalCard>
      <Row>
        {icon === 'Interrogation' && (<Interrogation width={75} height={75} style={{ margin: 10 }} />)}
        {icon === 'Alert' && (<Alert width={75} height={75} style={{ margin: 10 }} />)}
        <DescriptionText>{description}</DescriptionText>
      </Row>
      <Row>
        <NoButton onPressOut={() => {}}>
          <NoButtonText>Não</NoButtonText>
        </NoButton>
        <YesButton onPressOut={() => {}}>
          <YesButtonText>Sim</YesButtonText>
        </YesButton>
      </Row>
    </ModalCard>
  );
}
