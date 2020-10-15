import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function Main() {
  return (
    <View style={styles.container}>
      <Text>Home Beer</Text>
      <StatusBar style="auto" />
    </View>
  );
}
