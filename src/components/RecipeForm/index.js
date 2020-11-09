import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { Button, Text, TextInput, View, ActivityIndicator } from 'react-native';
import {
  CardsInfo,
  ContainerRecipeForm,
  TitleRecipeForm,
  InputText,
  TitleRow,
  SliderLabels,
  Row,
  TemperatureText,
  LabelText,
  AddButton,
  ButtonText,
  AmountInput,
  InformationInput,
  SubmitButton,
  SubmitButtonText,
  DeleteButton,
  NameDescriptionInput,
  HalfWidthInput,
  WarmAmountInput,
  WarmIngredientInput,
  WarmTimeInput,
  RowLabel,
  AmountLabel,
  InformationLabel,
  HalfWidthLabel,
  WarmAmountLabel,
  WarmIngredientLabel,
  WarmTimeLabel,
  HalfInputText,
  LoadingView,
  DeleteSubmitButton
} from './styles';
import { useNavigation } from '@react-navigation/native';

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
  const { navigate } = useNavigation();

  const [loading, setLoading] = useState(props.id ? true : false);

  const replaceToNumber = (value) => {
    if(value){
      return value.replace(/[^0-9]/g, '');
    }
    else{
      return null;
    }
  }

  const onSubmit = async (values, {setSubmitting, setErrors, setStatus, resetForm}) => {
    try {
      const data = JSON.stringify(values, null, 2);
      sendData(data);
      resetForm({})
      setStatus({success: true})
      navigate('Receitas', {});
    } catch (error) {
      setStatus({success: false})
      setSubmitting(false)
      setErrors({submit: error.message})
    }
  }


  const requestEditData = async (setFieldValue) => {
    await API.get(`receita/${props.id}/`, {headers: {
      'Authorization': 'cervejaria',
    }}).then((response) => {
      const responseData = response.data[0];
      setFieldValue(`nome`, responseData.nome);
      setFieldValue(`descricao`, responseData.descricao);
      setFieldValue(`tempoMedio`, responseData.tempoMedio);
      setFieldValue(`quantidadeLitros`, responseData.quantidadeLitros);
      setFieldValue(`aquecimento`, responseData.aquecimento);
      setFieldValue(`brassagem`, responseData.brassagem);
      setFieldValue(`fervura`, responseData.fervura);
      setFieldValue(`ingredientes`, responseData.ingredientes);
      setLoading(false);
    }, (error) => {
      console.log(error);
    });
  }

  const deleteData = async (data) => {
    if(props.id) {
      await API.delete(`receitas/${props.id}`,   {headers: {
        'Authorization': 'cervejaria',
      }}).then((response) => {
        console.log(response);
        navigate('Receitas', {});
      }, (error) => {
        console.log(error);
      });
    }
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
      onSubmit={onSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }) => {
      useEffect(() => {
        if (props.id) {
          (async () => await requestEditData(setFieldValue))();
        }
      },[]);

      return(
        <>
        {
        loading ?
        <LoadingView><ActivityIndicator size="large" color="#FCA311" visible={!loading}/></LoadingView>
        :
        <>
          <CardsInfo visible={loading}>
            <TitleRow>
              <DescriptionIcon width={25} height={25} />
              <TitleRecipeForm>Informações</TitleRecipeForm>
            </TitleRow>
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
              <HalfWidthLabel>Tempo médio (min)</HalfWidthLabel>
              <HalfWidthLabel>Volume (L)</HalfWidthLabel>
            </Row>
            <Row>
              <HalfWidthInput
                placeholder={"Tempo médio"}
                onChangeText={handleChange(`tempoMedio`)}
                onBlur={handleBlur(`tempoMedio`)}
                value={replaceToNumber(values.tempoMedio)}
              />
              <HalfWidthInput
                placeholder={"Quantidade de litros"}
                onChangeText={handleChange(`quantidadeLitros`)}
                onBlur={handleBlur(`quantidadeLitros`)}
                value={replaceToNumber(values.quantidadeLitros)}
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
              <AmountLabel>Tempo (min)</AmountLabel>
              <InformationLabel>Temperatura (°C)</InformationLabel>
            </Row>
            {values.brassagem.map(({ text }, brazingIndex) => (
              <View key={"brazingView-"+brazingIndex}>
                <Row key={"brazingRow-"+brazingIndex}>
                  <AmountInput
                    key={"tempo-" + brazingIndex}
                    placeholder={"Duração"}
                    onChangeText={handleChange(`brassagem[${brazingIndex}].tempo`)}
                    onBlur={handleBlur(`brassagem[${brazingIndex}].tempo`)}
                    value={replaceToNumber(values.brassagem[brazingIndex].tempo)}
                  />
                  <InformationInput
                    key={"temperatura-" + brazingIndex}
                    placeholder={"Temperatura"}
                    onChangeText={handleChange(`brassagem[${brazingIndex}].temperatura`)}
                    onBlur={handleBlur(`brassagem[${brazingIndex}].temperatura`)}
                    value={replaceToNumber(values.brassagem[brazingIndex].temperatura)}
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
            <InformationLabel>Tempo total (min)</InformationLabel>
            <NameDescriptionInput
              placeholder={"Tempo total"}
              onChangeText={handleChange(`fervura.tempoTotal`)}
              onBlur={handleBlur(`fervura.tempoTotal`)}
              value={replaceToNumber(values.fervura.tempoTotal)}
            />
            <Row>
              <WarmTimeLabel>Tempo (min)</WarmTimeLabel>
              <WarmIngredientLabel>Ingrediente</WarmIngredientLabel>
              <WarmAmountLabel>Quantidade</WarmAmountLabel>
            </Row>
            {values.fervura.ingredientes.map(({ tempo }, warmIndex) => (
              <View key={"warmView-"+warmIndex}>

                <Row key={"warmRow-"+warmIndex}>
                  <WarmTimeInput
                    key={"warmTime" + warmIndex}
                    placeholder={"Duração"}
                    onChangeText={handleChange(`fervura.ingredientes[${warmIndex}].tempo`)}
                    onBlur={handleBlur(`fervura.ingredientes[${warmIndex}].tempo`)}
                    value={replaceToNumber(values.fervura.ingredientes[warmIndex].tempo)}
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

          {props.id ?
            <DeleteSubmitButton onPress={deleteData} title="Delete">
              <SubmitButtonText>Excluir</SubmitButtonText>
            </DeleteSubmitButton>
            :
            <></>
          }
        </>
      }
        </>
      )
      }}
      </Formik>
    </ContainerRecipeForm>
  )
};

export default RecipeFormCard;
