import styled from 'styled-components/native';

const ContainerRecipeForm = styled.ScrollView`
  background: #14213D;
`;

const CardsInfo = styled.View`
  background: #FCA311;
  /* height: 450px; */
  width: 100%;
  /* border-radius: 14px; */
  margin-top: 25px;
  padding: 10px;
  /* box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15); */
`;


const TitleRecipeForm = styled.Text`
  color: #FFFFFF;
  font-size: 18px;
  width:100%;
  margin-left: 20px;
  /* text-align: center; */
  /* position: absolute; */
`;

const InputText = styled.TextInput`
  border-radius: 5px;
  background-color: #e8bf7d;
  margin: 5px;
`;

const TitleRow = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px 5px 10px;
  margin-bottom: 10px;
`;

const SliderLabels = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 40px 0px;
`;

const Row = styled.View`
  flex-direction: row;
`;

const RowLabel = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 40px;
`;

const TemperatureText = styled.Text`
  align-self: center;
  font-size: 30px;
  color: #14213D;
`;

const LabelText = styled.Text`
  font-size: 10px;
`;

// const AddButton = styled.Button`
//   width: 12px;
//   height: 54px;
//   font-size: 1px;
// `;

const AddButton = styled.TouchableOpacity`
  padding: 10px;
  width: 361px;
  height: 48px;
  background: transparent;
  color: black;
  border-radius: 6px;
  display: flex;
  /* align-items: center; */
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: #14213D;
  font-size: 17px;
  margin-left: 7px;
`;

const AmountInput = styled.TextInput`
  padding-left: 5px;
  width: 100px;
  border-radius: 5px;
  background-color: #e8bf7d;
  margin: 5px;
`;

const InformationInput = styled.TextInput`
  padding-left: 5px;
  width: 200px;
  border-radius: 5px;
  background-color: #e8bf7d;
  margin: 5px;
`;

const AmountLabel = styled.Text`
  padding-left: 5px;
  width: 100px;
  margin: 10px 5px 0px;
  color: #14213D;
`;

const InformationLabel = styled.Text`
  padding-left: 5px;
  width: 200px;
  margin: 10px 5px 0px;
  color: #14213D;
`;

const SubmitButton = styled.TouchableOpacity`
  padding: 10px;
  margin: 10px 0px 10px;
  width: 200px;
  height: 48px;
  background: #FCA311;
  color: black;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-self: center;
`;

const DeleteButton = styled.TouchableOpacity`
  margin-left: 4px;
  display: flex;
  justify-content: center;
  align-self: center;
`;

const SubmitButtonText = styled.Text`
  color: #FFFFFF;
  font-size: 17px;
  font-style: normal;
  text-align: center;
  margin-left: 7px;
`;

const NameDescriptionInput = styled.TextInput`
  border-radius: 5px;
  background-color: #e8bf7d;
  margin: 5px;
  padding-left: 5px;
`;

const HalfWidthInput = styled.TextInput`
  padding-left: 5px;
  width: 47%;
  border-radius: 5px;
  background-color: #e8bf7d;
  margin: 5px;
`;

const HalfWidthLabel = styled.Text`
  padding-left: 5px;
  width: 47%;
  margin: 10px 5px 0px;
  color: #14213D;
`;

const WarmTimeInput = styled.TextInput`
  padding-left: 5px;
  width: 90px;
  border-radius: 5px;
  background-color: #e8bf7d;
  margin: 5px;
`;

const WarmIngredientInput = styled.TextInput`
  padding-left: 5px;
  width: 120px;
  border-radius: 5px;
  background-color: #e8bf7d;
  margin: 5px;
`;

const WarmAmountInput = styled.TextInput`
  padding-left: 5px;
  width: 80px;
  border-radius: 5px;
  background-color: #e8bf7d;
  margin: 5px;
`;

const WarmTimeLabel = styled.Text`
  padding-left: 5px;
  width: 90px;
  margin: 10px 5px 0px;
  color: #14213D;
`;

const WarmIngredientLabel = styled.Text`
  padding-left: 5px;
  width: 120px;
  margin: 10px 5px 0px;
  color: #14213D;
`;

const WarmAmountLabel = styled.Text`
  padding-left: 5px;
  width: 80px;
  margin: 10px 5px 0px;
  color: #14213D;
`;

const HalfInputText = styled.Text`
  padding-left: 0px;
  color: #14213D;
  background-color: #e8bf7d;
`;

const LoadingView = styled.View`
  height: 600px;
  justify-content: center;
  align-items: center;
`

export {CardsInfo, ContainerRecipeForm, TitleRecipeForm, InputText, TitleRow, SliderLabels, Row, TemperatureText, LabelText, AddButton, ButtonText, AmountInput, InformationInput, SubmitButton, SubmitButtonText, DeleteButton, NameDescriptionInput, HalfWidthInput, WarmAmountInput, WarmIngredientInput, WarmTimeInput, RowLabel, AmountLabel, InformationLabel, HalfWidthLabel, WarmAmountLabel, WarmIngredientLabel, WarmTimeLabel, HalfInputText, LoadingView};
