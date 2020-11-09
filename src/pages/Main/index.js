import React, { useEffect, useState, createContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import RecipeCard from '../../components/RecipeCard/index';
import API from '../../services/api';

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
      </View>
    )
  );
}
