import styled from 'styled-components/native';

const Container = styled.View`
  background: #FCA311;
  /* height: 140px; */
  /* width: 320px; */
  flex: 1;
  border-radius: 14px;
  margin: 18px;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
  width: 100%;
  /* height: 120px; */
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const Content = styled.ScrollView.attrs({
  contentContainerStyle: props => {
    return {
      alignItems: 'center',
      justifyContent: 'center'
    }
  }
})``

const Title = styled.Text`
  color: #FFFFFF;
  font-size: 20px;
  font-weight: 600;
`;

const Description = styled.Text`
  padding: 15px;
  color: #FFFFFF;
  font-size: 15px;
  font-weight: 600;
  margin-top: 2px;
`;

const List = styled.SectionList`
  flex: 1;
  height: 150%;
  padding-right: 10px;
  padding-left: 10px;
`;

const TabDescription = styled.Text`
  color: #FFFFFF;
  font-size: 13px;
`;


export {Container, Cover, Image, Content, Title, Description, List, TabDescription};
