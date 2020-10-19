import * as React from 'react';;
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { TabBar, TabView, SceneMap } from 'react-native-tab-view';
import Ingredients from './Ingredients';
import Process from './Process';

const FirstRoute = () => (
  <Ingredients />
);

const SecondRoute = () => (
  <Process />
);

// const initialLayout = { width: Dimensions.get('window').width };

const renderTabBar = props => (
  <TabBar
    {...props}
    style={{ backgroundColor: '#FCA311' }}
    indicatorStyle={{ backgroundColor: '#14213D', height: 2 }}
  />
);

export default function RecipeTab () {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'ingredient', title: 'Ingredientes' },
    { key: 'process', title: 'Processos' },
  ]);

  const renderScene = SceneMap({
    ingredient: FirstRoute,
    process: SecondRoute,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
    />
  );
}
