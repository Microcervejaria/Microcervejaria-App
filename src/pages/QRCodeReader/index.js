import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  ErrorCotainer,
  ErrorTitle,
  CameraContainer,
  OpaqueBackground,
  Title,
} from './styles';

import Border from '../../assets/qrCodeBorder.svg';

export default function QRCodeReader() {
  const { navigate } = useNavigation();
  const [cameraPermission, setcameraPermission] = useState(false);

  async function handleBarCodeScanned(result) {
    const token = result.data;

    try {
      await AsyncStorage.setItem('Token', token);
      if (token === 'cervejaria') {
        navigate('Receitas');
      } else {
        navigate('Sign In')
        console.warn('Token inválido.');
      }
    } catch (error) {
      navigate('Sign In')
      console.error(error);
    }
  };

  useEffect(() => {
    (async() => await AsyncStorage.removeItem('Token'))();

    Permissions.getAsync(Permissions.CAMERA).then((response) => {
      if (response.canAskAgain && !response.granted) {
        Permissions.askAsync(Permissions.CAMERA).then((status) => {
          setcameraPermission(status.granted);
        });
      } else {
        setcameraPermission(response.granted);
      }
    });
  }, [])

  return (
    <OpaqueBackground>
      <Container>
        { cameraPermission
          ? (
            <>
              <CameraContainer>
                <Border style={{ position: 'absolute' }} />
                <BarCodeScanner
                  onBarCodeScanned={handleBarCodeScanned}
                  style={{ width: 250, height: 250 }}
                  barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                />
              </CameraContainer>
              <Title>APONTE A CÂMERA PARA O QR CODE</Title>
            </>
          ) : (
            <ErrorCotainer>
              <ErrorTitle>Para continuar usando, conceda o acesso da câmera ao aplicativo.</ErrorTitle>
            </ErrorCotainer>
          )}
      </Container>
    </OpaqueBackground>
  );
}
