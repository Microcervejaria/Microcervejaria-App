import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Description } from './styles';
import QrCode from '../../assets/icons/qrCode';
import Logo from '../../assets/icons/logo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14213D',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Logo width={232} height={274} style={{ margin: 40 }} />
      <View style={styles.body}>
        <TouchableOpacity>
          <QrCode width={160} height={160} />
        </TouchableOpacity>
        <Description>
          Adicione sua Microcervejaria
        </Description>
      </View>
    </View>
  );
}
