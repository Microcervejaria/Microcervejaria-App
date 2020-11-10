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

const WarmView = styled.View`
  margin: 20px 0px 20px;
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
`

const WarmLabel = styled.Text`
  margin: 10px 0px 0px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-self: center;
  color: #FCA311;
`;

export {ProcessLabel, InformationCardView, InformationCardText, WarmView, WarmLabel};
