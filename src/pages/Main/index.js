import React, { useEffect, useState } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import RecipeCard from '../../components/RecipeCard/index';
import API from '../../services/api';

import Cleaning from '../../assets/icons/cleaning.svg';
import Play from '../../assets/icons/play.svg';
import AddEditRecipe from '../../assets/icons/addEditRecipe.svg';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14213D',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default function Main() {
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
  }, []);

  return (
    !loading && (
      <View style={styles.container}>
        <RecipeCard data={data[0]} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <TouchableOpacity>
            <AddEditRecipe width={60} height={60} style={{ margin: 20 }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Play width={120} height={120} style={{ margin: 20 }} />
          </TouchableOpacity>
          <TouchableOpacity onPressOut={ () => navigate("Limpeza") }>
            <Cleaning width={60} height={60} style={{ margin: 20 }} />
          </TouchableOpacity>
        </View>
      </View>
    )
  );
}
