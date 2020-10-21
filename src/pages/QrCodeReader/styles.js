import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #14213D;
  align-items: center;
  justify-content: center;
`;

export const ErrorCotainer = styled.View`
  height: 80px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ErrorTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #EB5757;
`;

export const CameraContainer = styled.View`
  height: 270px;
  width: 270px;
  justify-content: center;
  align-items: center;
`;

export const OpaqueBackground = styled.View`
  flex:1;
  background-color: rgba(0,0,0,0.5);
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #FFFFFF;
`;
