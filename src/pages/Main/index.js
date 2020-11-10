import React, { useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import RecipeCard from '../../components/RecipeCard/index';
import API from '../../services/api';
import { element } from 'prop-types';

import Cleaning from '../../assets/icons/cleaning.svg';
import Play from '../../assets/icons/play.svg';
import AddEditRecipe from '../../assets/icons/addEditRecipe.svg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14213D',
  },
});

export default function Main({ route }) {
  const [data, setData] = useState(0);
  const [loading,setLoading]=useState(true);

  const { navigate } = useNavigation();

  async function getResponse() {
    setLoading(true);
    const response = await API.get(`receitas`, { headers: {"Authorization": "cervejaria"}});
    setData(response.data);
    setLoading(false);
  }
  useEffect(() => {
    getResponse();
  }, [route]);

  return (
    <View style={styles.container}>{
      !loading && (
        <View>
          <View style={{margin: 15}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >{
              data.map(recipe => (<RecipeCard key={recipe.nome} data={recipe} />))
            }</ScrollView>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPressOut={() => navigate('Formulário de Receita', { nome: null })}>
              <AddEditRecipe width={60} height={60} style={{ marginRight: 30}} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Play width={120} height={120} />
            </TouchableOpacity>
            <TouchableOpacity onPressOut={ () => navigate("Limpeza") }>
              <Cleaning width={60} height={60} style={{ marginLeft: 30 }} />
            </TouchableOpacity>
          </View>
        </View>
      )
    }</View>
  );
}
