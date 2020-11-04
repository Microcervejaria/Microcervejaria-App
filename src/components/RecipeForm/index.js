import React, {useState, useEffect} from 'react';
import { Formik } from 'formik';
import {Button, Text, TextInput, View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import { CardsInfo, ContainerRecipeForm, TitleRecipeForm, InputText, TitleRow,
  Row, SliderLabels, TemperatureText, LabelText, AddButton, ButtonText,
  AmountInput, InformationInput, SubmitButton, SubmitButtonText, DeleteButton,
  NameDescriptionInput, HalfWidthInput, WarmAmountInput, WarmIngredientInput, WarmTimeInput,
  AmountLabel, InformationLabel, HalfWidthLabel, WarmAmountLabel, WarmIngredientLabel,
  WarmTimeLabel}
  from './styles';

import { TextInputMask } from 'react-native-masked-text'

import CookBook from '../../assets/icons/cookBookForm.svg';
import Fire from '../../assets/icons/fire.svg';
import Brazing from '../../assets/icons/brazing.svg';
import Warm from '../../assets/icons/warm.svg';
import DescriptionIcon from '../../assets/icons/description.svg';
import HotThermometer from '../../assets/icons/hotThermometer.svg';
import ColdThermometer from '../../assets/icons/coldThermometer.svg';
import Plus from '../../assets/icons/plus.svg';
import Trash from '../../assets/icons/trash.svg';
import Slider from '@react-native-community/slider';
import API from '../../services/api';

const createBrazing = () => ({
  tempo: '',
  temperatura: ''
});

const createWarm = () => ({
  nome: '',
  tempo: ''
});

const createIngredient = () => ({
  nome: '',
  quantidade: '',
  unidadeMedida: ''
});


const RecipeFormCard = (props) => {
  const [temperatureData, setTemperatureData] = useState(250);

  const requestEditData = async (setFieldValue) => {
    await API.get(`receita/${props.id}/`, {headers: {
      'Authorization': 'cervejaria',
    }}).then((response) => {
      console.log("ENTROU  NA RESPONSE");
      console.log(responseData);
      console.log("ENTROU  NA RESPONSE");
      const responseData = response.data[0];
      setFieldValue(`nome`, responseData.nome);
      setFieldValue(`descricao`, responseData.descricao);
      setFieldValue(`tempoMedio`, responseData.tempoMedio);
      setFieldValue(`quantidadeLitros`, responseData.quantidadeLitros);
      setFieldValue(`aquecimento`, responseData.aquecimento);
      setFieldValue(`brassagem`, responseData.brassagem);
      setFieldValue(`fervura`, responseData.fervura);
      setFieldValue(`ingredientes`, responseData.ingredientes);
    }, (error) => {
      console.log(error);
    });
  }

  const sendData = async (data) => {
    if(props.id) {
      await API.put(`receitas/${props.id}`, data,   {headers: {
        'Authorization': 'cervejaria',
      }}).then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
    }
    else {
      await API.post('receita', data,   {headers: {
        'Authorization': 'cervejaria',
      }}).then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
    }
  }

  const initialValues = {
    descricao: null,
    nome: null,
    tempoMedio: null,
    quantidadeLitros: null,
    aquecimento: {temperatura: 40},
    brassagem: [createBrazing()],
    fervura:  {tempoTotal: "", ingredientes: [createWarm()]},
    ingredientes: [createIngredient()]
  };


  return (
    <ContainerRecipeForm>
    <Formik
      initialValues={initialValues}
      onSubmit={values => {
        const data = JSON.stringify(values, null, 2);
        console.log(data);
        sendData(data);
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }) => {
      useEffect(() => {
        console.log(props.id);
        if(props.id){
          (async () => await requestEditData(setFieldValue))();
        }
      },[]);
      return(
        <>
          <CardsInfo>
            <TitleRow>
              <DescriptionIcon width={25} height={25} />
              <TitleRecipeForm>Informações</TitleRecipeForm>
            </TitleRow>
            {/* <TextInputMask
              type={'custom'}
              options={{
                mask: '99999 AA'
              }}
              value={values.nome}
              onChangeText={handleChange(`nome`)}
              // value={"444444"}
            /> */}
            <InformationLabel>Nome</InformationLabel>
            <NameDescriptionInput
              placeholder={"Digite o nome"}
              key={"nome"}
              onChangeText={handleChange(`nome`)}
              onBlur={handleBlur(`nome`)}
              value={values.nome}
              onSubmitEditing={() => ref_input2.current.focus()}
            />
            <InformationLabel>Descrição</InformationLabel>
            <NameDescriptionInput
              multiline={true}
              placeholder={"Digite a descrição"}
              key={"descricao"}
              onChangeText={handleChange(`descricao`)}
              onBlur={handleBlur(`descricao`)}
              value={values.descricao}
            />
            <Row>
              <HalfWidthLabel>Tempo médio</HalfWidthLabel>
              <HalfWidthLabel>Quantidade</HalfWidthLabel>
            </Row>
            <Row>
              <HalfWidthInput
                placeholder={"Tempo médio"}
                onChangeText={handleChange(`tempoMedio`)}
                onBlur={handleBlur(`tempoMedio`)}
                value={values.tempoMedio}
              />
              <HalfWidthInput
                placeholder={"Quantidade de litros"}
                onChangeText={handleChange(`quantidadeLitros`)}
                onBlur={handleBlur(`quantidadeLitros`)}
                value={values.quantidadeLitros}
              />
            </Row>
          </CardsInfo>

          <CardsInfo>
            <TitleRow>
              <CookBook width={30} height={30}/>
              <TitleRecipeForm>Ingredientes</TitleRecipeForm>
            </TitleRow>
            <Row>
              <InformationLabel>Nome do ingrediente</InformationLabel>
              <AmountLabel>Quantidade</AmountLabel>
            </Row>
            {values.ingredientes.map(({ nome }, ingredientIndex) => (
              <View key={"ingredientView-"+ingredientIndex}>
                <Row key={"ingredientRow-"+ingredientIndex}>
                  <InformationInput
                    key={"nome-" + ingredientIndex}
                    placeholder={"Ingrediente"}
                    onChangeText={handleChange(`ingredientes[${ingredientIndex}].nome`)}
                    onBlur={handleBlur(`ingredientes[${ingredientIndex}].nome`)}
                    value={values.ingredientes[ingredientIndex].nome}
                  />
                  <AmountInput
                    key={"ingredientAmount-" + ingredientIndex}
                    placeholder={"Quantidade"}
                    onChangeText={(value) => {
                      setFieldValue(`ingredientes[${ingredientIndex}].unidadeMedida`, null)
                      setFieldValue(`ingredientes[${ingredientIndex}].quantidade`, value)
                    }}
                    onBlur={() => {
                      const valueAux = values.ingredientes[ingredientIndex].quantidade;
                      const quantidade = values.ingredientes[ingredientIndex].quantidade.replace(/(^\d+)(.+$)/i,'$1');
                      const unidadeMedida = valueAux.replace(/[^A-Za-z]/g, '');
                      setFieldValue(`ingredientes[${ingredientIndex}].quantidade`, quantidade)
                      setFieldValue(`ingredientes[${ingredientIndex}].unidadeMedida`, unidadeMedida)
                      handleBlur(`ingredientes[${ingredientIndex}].quantidade`)
                    }}
                    value={values.ingredientes[ingredientIndex].unidadeMedida ? values.ingredientes[ingredientIndex].quantidade + ' ' + values.ingredientes[ingredientIndex].unidadeMedida : values.ingredientes[ingredientIndex].quantidade}
                  />
                  <DeleteButton onPress={() => {
                  values.ingredientes.splice(ingredientIndex, 1);
                  setFieldValue('ingredientes', values.ingredientes)
                  }}>

                    <Trash width={16} height={16} />
                  </DeleteButton>
                </Row>
              </View>
            ))}
            <AddButton onPress={() => setFieldValue('ingredientes', [...values.ingredientes, createIngredient()])}>
              <Row>
                <Plus width={16} height={16} />
                <ButtonText>
                  Ingrediente
                </ButtonText>
              </Row>
            </AddButton>
          </CardsInfo>

          <CardsInfo>
            <TitleRow>
              <Fire width={25} height={25}/>
              <TitleRecipeForm>Aquecimento</TitleRecipeForm>
            </TitleRow>
            <SliderLabels>
              <LabelText>25°C</LabelText>
              <LabelText>100°C</LabelText>
            </SliderLabels>
            <Row>
              <ColdThermometer width={30} height={30}/>
              <Slider
                key={"temperatura"}
                value={(values.aquecimento.temperatura*10)}
                style={{width: 280}}
                minimumValue={250}
                maximumValue={1000}
                minimumTrackTintColor="#EB5757"
                maximumTrackTintColor="#14213D"
                thumbTintColor="#FFFFFF"
                step={1}
                onValueChange={
                  (sliderValue) => {
                    setTemperatureData(sliderValue);
                    setFieldValue(`aquecimento.temperatura`, (sliderValue/10).toFixed(1))
                  }
                }
              />
              <HotThermometer width={30} height={30}/>
            </Row>
            <TemperatureText>{values.aquecimento.temperatura}°C</TemperatureText>
          </CardsInfo>


          <CardsInfo>
            <TitleRow>
              <Brazing width={25} height={25}/>
              <TitleRecipeForm>Brassagem</TitleRecipeForm>
            </TitleRow>
            <Row>
              <AmountLabel>Tempo</AmountLabel>
              <InformationLabel>Temperatura</InformationLabel>
            </Row>
            {values.brassagem.map(({ text }, brazingIndex) => (
              <View key={"brazingView-"+brazingIndex}>
                <Row key={"brazingRow-"+brazingIndex}>
                  <AmountInput
                    key={"tempo-" + brazingIndex}
                    placeholder={"Duração"}
                    onChangeText={handleChange(`brassagem[${brazingIndex}].tempo`)}
                    onBlur={handleBlur(`brassagem[${brazingIndex}].tempo`)}
                    value={values.brassagem[brazingIndex].tempo}
                  />
                  <InformationInput
                    key={"temperatura-" + brazingIndex}
                    placeholder={"Temperatura"}
                    onChangeText={handleChange(`brassagem[${brazingIndex}].temperatura`)}
                    onBlur={handleBlur(`brassagem[${brazingIndex}].temperatura`)}
                    value={values.brassagem[brazingIndex].temperatura}
                  />
                  <DeleteButton onPress={() => {
                  values.brassagem.splice(brazingIndex, 1);
                  setFieldValue('brassagem', values.brassagem)
                  }}>
                    <Trash width={16} height={16} />
                  </DeleteButton>
                </Row>
              </View>
            ))}
            <AddButton onPress={() => setFieldValue('brassagem', [...values.brassagem, createBrazing()])}>
              <Row>
                <Plus width={16} height={16} />
                <ButtonText>
                  Intervalo de tempo
                </ButtonText>
              </Row>
            </AddButton>
          </CardsInfo>

          <CardsInfo>
            <TitleRow>
              <Warm width={25} height={25}/>
              <TitleRecipeForm>Fervura</TitleRecipeForm>
            </TitleRow>
            <AmountLabel>Tempo total</AmountLabel>
            <NameDescriptionInput
              placeholder={"Tempo total"}
              onChangeText={handleChange(`fervura.tempoTotal`)}
              onBlur={handleBlur(`fervura.tempoTotal`)}
              value={values.fervura.tempoTotal}
            />
            <Row>
              <WarmTimeLabel>Tempo</WarmTimeLabel>
              <WarmIngredientLabel>Ingrediente</WarmIngredientLabel>
              <WarmAmountLabel>Quantidade</WarmAmountLabel>
            </Row>
            {values.fervura.ingredientes.map(({ tempo }, warmIndex) => (
              <View key={"warmView-"+warmIndex}>

                <Row key={"warmRow-"+warmIndex}>
                  {/* <Picker
                      key={"ingredient-" + warmIndex}
                      selectedValue={values.fervura.ingredientes[warmIndex].nome}
                      style={{ height: 50, width: 150 }}
                      onValueChange={(ingredient) =>{
                        if(ingredient) {
                          setFieldValue(`fervura.ingredientes[${warmIndex}].nome`, ingredient);
                          let ingredientSelected;
                          values.ingredientes.map((ingredientItem) =>{
                            if(ingredientItem.nome == ingredient) {
                              ingredientSelected = ingredientItem;
                            }
                          })
                          setFieldValue(`fervura.ingredientes[${warmIndex}].quantidade`, ingredientSelected.quantidade);
                          setFieldValue(`fervura.ingredientes[${warmIndex}].unidadeMedida`, ingredientSelected.unidadeMedida);
                        }
                      }}
                    >
                      <Picker.Item label="Selecione um ingrediente" value={null} key="ingredient-null" />
                      {values.ingredientes.map(element => {
                        return <Picker.Item label={element.nome} value={element.nome} key={"ingredient-"+element.nome} />
                      })}
                  </Picker> */}
                  <WarmTimeInput
                    key={"warmTime" + warmIndex}
                    placeholder={"Duração"}
                    onChangeText={handleChange(`fervura.ingredientes[${warmIndex}].tempo`)}
                    onBlur={handleBlur(`fervura.ingredientes[${warmIndex}].tempo`)}
                    value={values.fervura.ingredientes[warmIndex].tempo}
                  />
                  <WarmIngredientInput
                    key={"fervuraIngredient-" + warmIndex}
                    placeholder={"Ingrediente"}
                    onChangeText={handleChange(`fervura.ingredientes[${warmIndex}].nome`)}
                    onBlur={handleBlur(`fervura.ingredientes[${warmIndex}].nome`)}
                    value={values.fervura.ingredientes[warmIndex].nome}
                  />
                  <WarmAmountInput
                    key={"fervuraQuantidade-" + warmIndex}
                    placeholder={"Quantidade"}
                    onChangeText={(value) => {
                      setFieldValue(`fervura.ingredientes[${warmIndex}].unidadeMedida`, null)
                      setFieldValue(`fervura.ingredientes[${warmIndex}].quantidade`, value)
                    }}
                    onBlur={() => {
                      const valueAux = values.fervura.ingredientes[warmIndex].quantidade;
                      const quantidade = values.fervura.ingredientes[warmIndex].quantidade.replace(/(^\d+)(.+$)/i,'$1');
                      const unidadeMedida = valueAux.replace(/[^A-Za-z]/g, '');
                      setFieldValue(`fervura.ingredientes[${warmIndex}].quantidade`, quantidade)
                      setFieldValue(`fervura.ingredientes[${warmIndex}].unidadeMedida`, unidadeMedida)
                      handleBlur(`fervura.ingredientes[${warmIndex}].quantidade`)
                    }}
                    value={values.fervura.ingredientes[warmIndex].unidadeMedida ? values.fervura.ingredientes[warmIndex].quantidade + ' ' + values.fervura.ingredientes[warmIndex].unidadeMedida : values.fervura.ingredientes[warmIndex].quantidade}
                  />

                  <DeleteButton onPress={() => {
                  values.fervura.ingredientes.splice(warmIndex, 1);
                  setFieldValue('fervura.ingredientes', values.fervura.ingredientes)
                  }}>

                    <Trash width={16} height={16} />
                  </DeleteButton>
                </Row>
              </View>
            ))}
            <AddButton onPress={() => setFieldValue('fervura.ingredientes', [...values.fervura.ingredientes, createWarm()])}>
              <Row>
                <Plus width={16} height={16} />
                <ButtonText>
                  Intervalo de tempo
                </ButtonText>
              </Row>
            </AddButton>
          </CardsInfo>

          <SubmitButton onPress={handleSubmit} title="Submit">
            <SubmitButtonText>Confirmar</SubmitButtonText>
          </SubmitButton>
        </>
      )}}
      </Formik>
    </ContainerRecipeForm>
  )
};

export default RecipeFormCard;
