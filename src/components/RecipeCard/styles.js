import styled from 'styled-components/native';

const ContainerRecipeCard = styled.View`
  background: #FCA311;
  height: 450px;
  width: 320px;
  border-radius: 14px;
  margin: 18px;
  margin-top: 20px;
  padding: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const ContentRecipeCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 5px 10px;
  padding-top: 10px;
`;

const TitleRecipeCard = styled.Text`
  color: #FFFFFF;
  font-size: 25px;
  font-weight: 600;
`;

const DescriptionRecipeCard = styled.Text`
  padding: 0px 15px 15px;
  color: #FFFFFF;
  font-size: 15px;
`;

const InfoRowRecipeCard = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding-top: 8px;
  padding-bottom: 8px;
`

const InfoComponentRecipeCard = styled.View`
  align-items: center;
`

const InfoTextRecipeCard = styled.Text`
  color: #FFFFFF;
`

const TabContainer = styled.View`
  background: #FCA311;
  /* height: 140px; */
  /* width: 320px; */
  flex: 1;
  border-radius: 14px;
  margin: 18px;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const TabList = styled.SectionList`
  flex: 1;
  height: 150%;
  padding-right: 10px;
  padding-left: 10px;
`;

const TabDescription = styled.Text`
  color: #FFFFFF;
  font-size: 13px;
`;


export {ContainerRecipeCard, ContentRecipeCard, TitleRecipeCard, DescriptionRecipeCard, InfoRowRecipeCard, InfoComponentRecipeCard, InfoTextRecipeCard, TabContainer, TabList, TabDescription};
