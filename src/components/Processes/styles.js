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
  margin: 30px 0px 30px;
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

const ChartView = styled.View`
  margin: 10px 0px 10px;
  justify-content: center;
  align-self: center;
  align-items: center;
`

const CurrentProcessLabel = styled.Text`
  margin: 10px 0px 10px;
  font-size: 27px;
  justify-content: center;
  align-self: center;
  color: #FCA311;
`;

const FinishedProcessLabel = styled.Text`
  margin: 5px 0px 5px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-self: center;
  color: #EB5757;
`;

const UnFinishedProcessLabel = styled.Text`
  margin: 5px 0px 5px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-self: center;
  color: #E5E5E5;
`;

const ProcessBoilScrollView = styled.ScrollView`
  margin-top: 20px;
`;

const PhasesBrewView = styled.View`
  height: 200px;
  width: 90%;
  justify-content: center;
  align-self: center;
`

const PhasesBoilView = styled.View`
  height: 300px;
  width: 90%;
  justify-content: center;
  align-self: center;
`

export {ProcessLabel, InformationCardView, InformationCardText, WarmView, WarmLabel, ChartView, CurrentProcessLabel, FinishedProcessLabel, UnFinishedProcessLabel, PhasesBrewView, PhasesBoilView, ProcessBoilScrollView};
