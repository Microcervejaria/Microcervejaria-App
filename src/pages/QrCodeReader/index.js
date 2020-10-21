import React, { useState, useEffect } from 'react';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

import { View, StyleSheet } from 'react-native';
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

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default function QrCodeReader() {
  const { navigate } = useNavigation();
  const [cameraPermission, setcameraPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [qrData, setQrData] = useState({});

  const handleBarCodeScanned = (result) => {
    setScanned(true);

    const token = "cervejaria"

    navigate('Main');
  };

  useEffect(() => {
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
              <View style={{ marginTop: 30 }}>
                {
                  hasError
                    ? <ErrorTitle>NÃO FOI POSSÍVEL LER O CÓDIGO QR</ErrorTitle>
                    : <Title>APONTE A CÂMERA PARA O CÓDIGO QR</Title>
                }
              </View>
            </>
          ) : (
            <ErrorCotainer>
              <ErrorTitle>Para continuar usando de acesso a camera</ErrorTitle>
            </ErrorCotainer>
          )}
      </Container>
    </OpaqueBackground>
  );
}
