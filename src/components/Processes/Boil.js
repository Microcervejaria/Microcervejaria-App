import React, { Component } from 'react';
import {View, Text} from 'react-native';
import {ProcessLabel, CurrentProcessLabel, FinishedProcessLabel, UnFinishedProcessLabel, ProcessBoilScrollView, PhasesBoilView} from './styles';

export default function BoilProcess(props) {
  return (
    <>
      <View>
        <ProcessLabel>Fervura</ProcessLabel>
      </View>
      <PhasesBoilView>
        <ProcessBoilScrollView
          scrollEventThrottle={16}
          showsVerticalScrollIndicator
          scrollEnabled={true}
          >
          {props.data.etapas[0].ingredientes.map((ingrediente, index) => {
          const content = ingrediente.quantidade + ingrediente.unidadeMedida + " " + ingrediente.nome + " -> " + ingrediente.tempo + " min";
            if(ingrediente.estado == -1) {
              return <FinishedProcessLabel key={"fervura" + index}>{content}</FinishedProcessLabel>;
            }
            else if(ingrediente.estado == 1) {
              return <CurrentProcessLabel key={"fervura" + index}>{content}</CurrentProcessLabel>;
            }
            else if(ingrediente.estado == 0) {
              return <UnFinishedProcessLabel key={"fervura" + index}>{content}</UnFinishedProcessLabel>;
            }
          })}
        </ProcessBoilScrollView>
      </PhasesBoilView>
    </>
  );
}
