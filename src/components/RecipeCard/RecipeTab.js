import React, {useContext, useState, useEffect} from 'react';;
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import { TabBar, TabView, SceneMap } from 'react-native-tab-view';
import Ingredients from './Ingredients';
import Process from './Process';
import RecipeContext from '../../contexts/recipe';

const renderTabBar = props => (
  <TabBar
    {...props}
    style={{ backgroundColor: '#FCA311' }}
    indicatorStyle={{ backgroundColor: '#14213D', height: 2 }}
  />
);

export default function RecipeTab (props) {
  const recipeContext = useContext(RecipeContext);
  const [index, setIndex] = React.useState(0);
  const [ingredients, setIngredients] = useState();
  const [brazingData, setBrazingData] = useState();
  const [warmData] = useState({'title': '1. Aquecimento', 'data': [recipeContext.data.aquecimento.temperatura + '°C']});
  const [boilData] = useState({'title': '3. Fervura', 'data': [recipeContext.data.fervura.tempoTotal + ' min']});

  function IngredientsData() {
    const dataIngredients = [];
    recipeContext.data.Ingredientes.forEach(function (obj) {
      dataIngredients.push({"title": obj.nome,"data": [obj.quantidade + ' ' + obj.unidadeMedida]});
    });
    setIngredients(dataIngredients);
  }

  function BrazingData() {
    const dataBrazing = [];
    recipeContext.data.brassagem.forEach(function (obj) {
      dataBrazing.push(obj.temperatura + '°C ' + obj.tempo + ' min');
    });
    setBrazingData({'title': '2. brassagem', 'data': dataBrazing});
  }

  useEffect(() => {
    IngredientsData();
    BrazingData();
  }, []);

  const FirstRoute = () => (
    <Ingredients ingredientes={ingredients}/>
  );

  const SecondRoute = () => (
    <Process aquecimento={warmData} brassagem={brazingData} fervura={boilData} />
  );

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
