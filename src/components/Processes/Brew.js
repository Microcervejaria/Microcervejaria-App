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
