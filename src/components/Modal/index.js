import React, { Component, useEffect, useState } from 'react';
import { View, Button, Text, TouchableOpacity } from 'react-native';
import { set } from 'react-native-reanimated';

import Alert from '../../assets/icons/alert.svg';
import Interrogation from '../../assets/icons/interrogation.svg';

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
    <View style={{
      backgroundColor: '#FCA311',
      height: '32%',
      width: '75%',
      borderRadius: 15,
      padding: 15
      }}
    >
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
        }}
      >
        {icon === 'Interrogation' &&
        (<Interrogation width={75} height={75} style={{ margin: 10 }} />)}
        {icon === 'Alert' &&
        (<Alert width={75} height={75} style={{ margin: 10 }} />)}
        <Text style={{
          fontSize: 20,
          flex: 1,
          flexWrap: 'wrap'
          }}
        >{description}</Text>
      </View>
      <View style={{ alignItems: 'center', padding: 10 }}>
        <View style={{ flexDirection: 'row'}}>
          <View style={{
            // backgroundColor: '#14213D',
            borderRadius: 5,
            margin: 10,
            height: '65%',
            width: '40%',
            justifyContent: 'center',
            }}
          >
            <Button
              title='Não'
              color='#14213D'
              onPress={() => {}}
            />
          </View>
          <View style={{
            // backgroundColor: '#EB5757',
            borderRadius: 5,
            margin: 10,
            height: '65%',
            width: '40%',
            justifyContent: 'center',
          }}>
            <Button
              title='Sim'
              color='#EB5757'
              onPress={() => {}}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
