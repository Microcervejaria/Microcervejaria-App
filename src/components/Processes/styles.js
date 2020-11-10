import styled from 'styled-components/native';

const ProcessLabel = styled.Text`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-self: center;
  color: #FCA311;
`;

const InformationCardView = styled.View`
  background-color: #FCA311;
  justify-content: flex-end;
  align-self: center;
  align-items: center;
  padding: 5px 30px 5px;
  border-radius: 10px;
`;

const InformationCardText = styled.Text`
  font-size: 15px;
`;


export {ProcessLabel, InformationCardView, InformationCardText};
