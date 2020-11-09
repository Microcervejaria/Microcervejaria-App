import React, { useState, useEffect } from 'react';
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

  const handleBarCodeScanned = (result) => {
    const token = result.data;

    // TODO: Guardar token

    navigate('Receitas');
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
              <Title>APONTE A CÂMERA PARA O QR CODE</Title>
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
