import React, { Component } from 'react';
import {View, Text, ScrollView} from 'react-native';
import {ProcessLabel, ChartView, CurrentProcessLabel, FinishedProcessLabel, UnFinishedProcessLabel, PhasesBrewView} from './styles';
import ChartBrew from '../../assets/icons/graphBew.svg';

export default function BrewProcess(props) {
  return (
    <>
      <View>
        <ProcessLabel>Brassagem</ProcessLabel>
      </View>
      <ChartView>
        <ChartBrew width={30}/>
      </ChartView>
      <PhasesBrewView>
        <ScrollView
         scrollEventThrottle={16}
         showsVerticalScrollIndicator
         scrollEnabled={true}
        >
          {props.data.etapas.map((etapa, index) => {
              const content = etapa.tempo + " min -> " + etapa.temperatura + "°C";
              if(etapa.estado == -1) {
                return <FinishedProcessLabel key={"brassagem" + index}>{content}</FinishedProcessLabel>;
              }
              else if(etapa.estado == 1) {
                return <CurrentProcessLabel key={"brassagem" + index}>{content}</CurrentProcessLabel>;
              }
              else if(etapa.estado == 0) {
                return <UnFinishedProcessLabel key={"brassagem" + index}>{content}</UnFinishedProcessLabel>;
              }
            })
          }
        </ScrollView>
      </PhasesBrewView>
    </>
  );
}


/*
{
  "processo": "aquecimento",
  "etapas": [
      {
          "temperatura": "70"
      }
  ],
  "tempoAtual": "10",
  "tempoRestante": "10",
  "temperaturaAtual": "10"
}


{
  "processo": "brassagem",
  "etapas": [{
    "tempo": "10",
    "temperatura": "25",
    "estado": "-1"
  },{
    "tempo": "20",
    "temperatura": "60",
    "estado": "1"
  },{
    "tempo": "60",
    "temperatura": "10",
    "estado": "0"
  },{
    "tempo": "40",
    "temperatura": "50",
    "estado": "0"
  }],
  "tempoAtual": "10",
  "tempoRestante": "10",
  "temperaturaAtual": "40"
}

{
  "processo": "fervura",
  "etapas": [{
      "ingredientes": [{
          "tempo": "10",
          "nome": "Cascade",
          "quantidade": "30",
          "unidadeMedida": "g",
          "estado": "-1"

      },{
          "tempo": "20",
          "nome": "Colungos",
          "quantidade": "30",
          "unidadeMedida": "g",
          "estado": "1"

      },{
          "tempo": "40",
          "nome": "Herkules",
          "quantidade": "20",
          "unidadeMedida": "g",
          "estado": "0"

      },{
          "tempo": "60",
          "nome": "Cascade",
          "quantidade": "20",
          "unidadeMedida": "g",
          "estado": "0"

      },{
          "tempo": "60",
          "nome": "Colungos",
          "quantidade": "20",
          "unidadeMedida": "g",
          "estado": "0"

      },{
          "tempo": "70",
          "nome": "Herkules",
          "quantidade": "40",
          "unidadeMedida": "g",
          "estado": "0"

      }]
  }],
  "tempoAtual": "20",
  "tempoRestante": "10",
  "temperaturaAtual": "37"
}

*/
