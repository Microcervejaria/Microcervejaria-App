import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RecipeCard from '../../components/Recipe/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14213D',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default function Main() {
  return (
    <View style={styles.container}>
      {/* <Text>Home Beer</Text> */}
      <RecipeCard title="TESTE" />
    </View>
  );
}
