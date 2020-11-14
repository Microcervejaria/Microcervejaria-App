import styled from 'styled-components/native';

export const ModalCard = styled.View`
  background: #FCA311;
  height: 200px;
  width: 330px;
  border-radius: 10px;
  padding: 15px 25px;
  }}
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const NoButton = styled.TouchableOpacity`
  margin: 10px;
  width: 100px;
  height: 50px;
  background: #14213D;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-self: center;
`;

export const NoButtonText = styled.Text`
  color: #FFFFFF;
  font-size: 20px;
  font-style: normal;
  text-align: center;
`;

export const YesButton = styled.TouchableOpacity`
  margin: 10px;
  width: 100px;
  height: 50px;
  background: #EB5757;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-self: center;
`;

export const YesButtonText = styled.Text`
  color: #FFFFFF;
  font-size: 20px;
  font-style: normal;
  text-align: center;
`;

export const DescriptionText = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  flex: 1;
  flex-wrap: wrap;
`;
