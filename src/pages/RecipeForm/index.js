import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RecipeFormCard from '../../components/RecipeForm';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14213D',
  },
});

export default function RecipeFormPage(props) {
  const { nome } = props.route.params;

  return (
      <View style={styles.container}>
        <RecipeFormCard id={nome} />
      </View>
  );
}
