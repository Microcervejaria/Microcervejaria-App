import React, { useEffect, useState, createContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RecipeCard from '../../components/RecipeCard/index';
import API from '../../services/api';
import RecipeContext from '../../contexts/recipe';

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
  async function getResponse() {
    setLoading(true);
    const response = await API.get(`receitas?nome=American+IPA`, { headers: {"Authorization": "cervejaria"}});
    setData(response.data[0]);
    setLoading(false);
  }
  useEffect(() => {
    getResponse();
  }, []);

  return (
    !loading && (
    <RecipeContext.Provider value={{loading, data: data}}>
      <View style={styles.container}>
        {/* <Text>Home Beer</Text> */}
        <RecipeCard data={data} />
      </View>
    </RecipeContext.Provider>
    )
  );
}
