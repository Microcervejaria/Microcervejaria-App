import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Swiper from 'react-native-swiper';
import { MaterialIcons } from '@expo/vector-icons';
import BoilProcess from '../../components/Processes/Boil';
import WarmProcess from '../../components/Processes/Warm';
import BrewProcess from '../../components/Processes/Brew';
import InformationCard from '../../components/Processes/InformationCard';

import {LoadingView, InformationView} from './styles';

import CookBook from '../../assets/icons/cookBookForm.svg';
import Fire from '../../assets/icons/fire.svg';
import Brazing from '../../assets/icons/brazing.svg';
import Warm from '../../assets/icons/warm.svg';
import API from '../../services/api';

const stepIndicatorStyle = {
  stepIndicatorSize: 50,
  currentStepIndicatorSize: 50,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 0,
  stepStrokeWidth: 0,
  stepStrokeCurrentColor: '#FCA311',
  stepStrokeFinishedColor: '#EB5757',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#EB5757',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#EB5757',
  stepIndicatorUnFinishedColor: '#aaaaaa',
  stepIndicatorCurrentColor: '#FCA311',
};


const getStepIndicatorIconConfig = ({position}) => {
  switch (position) {
    case 0: {
      return <CookBook width={30} height={30} />;
    }
    case 1: {
      return <Fire width={25} height={25}/>;
    }
    case 2: {
      return <Brazing width={25} height={25}/>;
    }
    case 3: {
      return <Warm width={25} height={25}/>;
    }
    default: {
      break;
    }
  }
};

const mapProcess = {'aquecimento': 1, 'brassagem': 2, 'fervura': 3};

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [processData, setProcessData] = useState();
  const [ProcessComponent, setProcessComponent] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getActualProcess();
  }, []);

  const getActualProcess = async() => {
    const response = await API.get(`processo`, { headers: {"Authorization": "cervejaria"}});
    setProcessData(response.data);
    setLoading(false);
    renderProcessComponent(response.data);
  }

  const renderProcessComponent = (data) => {
    switch (data.processo) {
      case 'aquecimento': {
        setProcessComponent(<WarmProcess data={data} />);
      }
      case 'brassagem': {
        return <BrewProcess data={data} />;
      }
      case 'fervura': {
        return <BoilProcess data={data} />;
      }
      default: {
        break;
      }
    }
  };

  const onStepPress = (position) => {
    setCurrentPage(position);
  };

  const renderStepIndicator = (params) => {
    return getStepIndicatorIconConfig(params);
  };

  return (
    <>
    {
      loading ?
      <LoadingView><ActivityIndicator size="large" color="#FCA311" visible={!loading}/></LoadingView>
      :
      <View style={styles.container}>
        <View style={styles.stepIndicator}>
          <StepIndicator
            stepCount={4}
            customStyles={stepIndicatorStyle}
            onPress={onStepPress}
            currentPosition={mapProcess[processData.processo]}
            renderStepIndicator={renderStepIndicator}
          />
        </View>
        {ProcessComponent}
        <InformationView>
          <InformationCard temperatura={processData.temperaturaAtual} tempoRestante={processData.tempoRestante} />
        </InformationView>
      </View>
    }
  </>
  );
}

const styles = StyleSheet.create({
  stepIndicator: {
    marginVertical: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#14213D',
  },
});
