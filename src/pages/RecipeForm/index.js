import React, { useEffect, useState, createContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RecipeFormCard from '../../components/RecipeForm';
import API from '../../services/api';
import RecipeContext from '../../contexts/recipe';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14213D',
  },
});

export default function RecipeFormPage() {
  const [data, setData] = useState();

  // async function getResponse() {
  //   await API.get(`receita/American IPA/`, {headers: {
  //     'Authorization': 'cervejaria',
  //   }}).then((response) => {
  //     setData(response.data.body[0]);
  //   }, (error) => {
  //     console.log(error);
  //   });
  // }
  // useEffect(() => {
  //   (async() => {await getResponse();})
  //   console.log(data);
  // }, []);

  return (
      <View style={styles.container}>
        {/* <Text>Home Beer</Text> */}
        <RecipeFormCard id="nomeTeste2" />
      </View>
  );
}
