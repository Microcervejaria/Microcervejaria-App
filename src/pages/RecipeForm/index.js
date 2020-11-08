import React, { useEffect, useState, createContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RecipeFormCard from '../../components/RecipeForm';
import API from '../../services/api';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14213D',
  },
});

export default function RecipeFormPage() {
  const [data, setData] = useState();

  return (
      <View style={styles.container}>
        <RecipeFormCard id="American+IPA" />
      </View>
  );
}
