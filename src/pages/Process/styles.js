import styled from 'styled-components/native';

const LoadingView = styled.View`
  height: 600px;
  justify-content: center;
  align-items: center;
`

const InformationView = styled.View`
  flex: 1;
  margin-bottom: 15px;
  justify-content: flex-end;
  align-items: center;
`

const InformationViewElements = styled.View`
  margin-top: 13px;
  justify-content: flex-end;
  align-items: center;
`

export {LoadingView, InformationView, InformationViewElements};
