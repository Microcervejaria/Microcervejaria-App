import React, {useState, useEffect} from 'react';
import { Formik } from 'formik';
import {Button, Text, TextInput, View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import { CardsInfo, ContainerRecipeForm, TitleRecipeForm, InputText, TitleRow,
  Row, SliderLabels, TemperatureText, LabelText, AddButton, ButtonText,
  AmountInput, InformationInput, SubmitButton, SubmitButtonText, DeleteButton,
          NameDescriptionInput, HalfWidthInput} from './styles';

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


const RecipeFormCard = () => {
  const [temperatureData, setTemperatureData] = useState(250);

  useEffect(() => {
  }, []);

  const sendData = async (data) => {
    const teste = {
      "nome": "testeSPPS",
      "descricao": "Cerveja amarga, com um toque suave de lúpulo Columbus",
      "tempoMedio": "135",
      "quantidadeLitros": "20",
      "Ingredientes": [
        {
          "nome": "Água",
          "quantidade": "21",
          "unidadeMedida": "Litros"
        },
        {
          "nome": "Malte Pielsen",
          "quantidade": "5",
          "unidadeMedida": "Kilos"
        },
        {
          "nome": "Malte Melanoidina",
          "quantidade": "1",
          "unidadeMedida": "Kilos"
        },
        {
          "nome": "Lúpulo Herkules",
          "quantidade": "20",
          "unidadeMedida": "gramas"
        },
        {
          "nome": "Lúpulo Cascade",
          "quantidade": "80",
          "unidadeMedida": "gramas"
        },
        {
          "nome": "Lúpulo Columbus",
          "quantidade": "80",
          "unidadeMedida": "gramas"
        },
        {
          "nome": "Fermento US05",
          "quantidade": "1",
          "unidadeMedida": "pacote"
        }
      ],
      "aquecimento": {
        "temperatura": "69"
      },
      "brassagem": [
        {
          "tempo": "60",
          "temperatura": "64"
        },
        {
          "tempo": "15",
          "temperatura": "77"
        }
      ],
      "fervura": {
        "tempoTotal": "60",
        "ingredientes": [
          {
            "tempo": "60",
            "nome": "Herkules",
            "quantidade": "20",
            "unidadeMedida": "gramas"
          },
          {
            "tempo": "10",
            "nome": "Columbus",
            "quantidade": "30",
            "unidadeMedida": "gramas"
          },
          {
            "tempo": "5",
            "nome": "Cascade",
            "quantidade": "30",
            "unidadeMedida": "gramas"
          },
          {
            "tempo": "0",
            "nome": "Cascade",
            "quantidade": "20",
            "unidadeMedida": "gramas"
          },
          {
            "tempo": "0",
            "nome": "Columbus",
            "quantidade": "20",
            "unidadeMedida": "gramas"
          }
        ]
      }
    };
    await API.post('receita', data,   {headers: {
      'Authorization': 'cervejaria',
    }}).then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }


  return (
    <ContainerRecipeForm>
    <Formik
      initialValues={{ descricao: null, nome: null, tempoMedio: null, quantidadeLitros: null, aquecimento: {temperatura: 40}, brassagem: [createBrazing()],
                        fervura: {tempoTotal: "", ingredientes: [createWarm()]}, Ingredientes: [createIngredient()]}}
      onSubmit={values => {
        const data = JSON.stringify(values, null, 2);
        console.log(data);
        sendData(data);
        // console.log(values);
        // console.log(teste);
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }) => (
      <>
        {/* <CardsInfo>
          <TitleRow>
            <TitleRecipeForm>Nome</TitleRecipeForm>
          </TitleRow>

          <InputText
            placeholder={"Digite o nome aqui"}
            key={"descricao"}
            onChangeText={handleChange(`descricao`)}
            onBlur={handleBlur(`descricao`)}
            value={values.descricao}
          />
        </CardsInfo> */}

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
          <NameDescriptionInput
            placeholder={"Digite o nome aqui"}
            key={"nome"}
            onChangeText={handleChange(`nome`)}
            onBlur={handleBlur(`nome`)}
            value={values.nome}
          />
          <NameDescriptionInput
            multiline={true}
            placeholder={"Digite a descrição aqui"}
            key={"descricao"}
            onChangeText={handleChange(`descricao`)}
            onBlur={handleBlur(`descricao`)}
            value={values.descricao}
          />
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
          {values.Ingredientes.map(({ nome }, ingredientIndex) => (
            <View key={"ingredientView-"+ingredientIndex}>
              <Row key={"ingredientRow-"+ingredientIndex}>
                <AmountInput
                  key={"nome-" + ingredientIndex}
                  placeholder={"Ingrediente"}
                  onChangeText={handleChange(`Ingredientes[${ingredientIndex}].nome`)}
                  onBlur={handleBlur(`Ingredientes[${ingredientIndex}].nome`)}
                  value={values.Ingredientes[ingredientIndex].nome}
                />
                <InformationInput
                  key={"ingredientAmount-" + ingredientIndex}
                  placeholder={"Quantidade"}
                  onChangeText={(value) => {
                    setFieldValue(`Ingredientes[${ingredientIndex}].unidadeMedida`, null)
                    setFieldValue(`Ingredientes[${ingredientIndex}].quantidade`, value)
                  }}
                  onBlur={() => {
                    const valueAux = values.Ingredientes[ingredientIndex].quantidade;
                    const quantidade = values.Ingredientes[ingredientIndex].quantidade.replace(/(^\d+)(.+$)/i,'$1');
                    const unidadeMedida = valueAux.replace(/[^A-Za-z]/g, '');
                    setFieldValue(`Ingredientes[${ingredientIndex}].quantidade`, quantidade)
                    setFieldValue(`Ingredientes[${ingredientIndex}].unidadeMedida`, unidadeMedida)
                    handleBlur(`Ingredientes[${ingredientIndex}].quantidade`)
                  }}
                  value={values.Ingredientes[ingredientIndex].unidadeMedida ? values.Ingredientes[ingredientIndex].quantidade + ' ' + values.Ingredientes[ingredientIndex].unidadeMedida : values.Ingredientes[ingredientIndex].quantidade}
                />
                <DeleteButton onPress={() => {
                 values.Ingredientes.splice(ingredientIndex, 1);
                 setFieldValue('Ingredientes', values.Ingredientes)
                }}>

                  <Trash width={16} height={16} />
                </DeleteButton>
              </Row>
            </View>
          ))}
          <AddButton onPress={() => setFieldValue('Ingredientes', [...values.Ingredientes, createIngredient()])}>
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
            <TitleRecipeForm>Temperatura</TitleRecipeForm>
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
          {values.brassagem.map(({ text }, brazingIndex) => (
            <View key={"brazingView-"+brazingIndex}>
              <Row key={"brazingRow-"+brazingIndex}>
                <InformationInput
                  key={"tempo-" + brazingIndex}
                  placeholder={"Duração"}
                  onChangeText={handleChange(`brassagem[${brazingIndex}].tempo`)}
                  onBlur={handleBlur(`brassagem[${brazingIndex}].tempo`)}
                  value={values.brassagem[brazingIndex].tempo}
                />
                <AmountInput
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
          <NameDescriptionInput
            placeholder={"Tempo total"}
            onChangeText={handleChange(`fervura.tempoTotal`)}
            onBlur={handleBlur(`fervura.tempoTotal`)}
            value={values.fervura.tempoTotal}
          />

          {values.fervura.ingredientes.map(({ tempo }, warmIndex) => (
            <View key={"warmView-"+warmIndex}>

              <Row key={"warmRow-"+warmIndex}>
                <Picker
                    key={"ingredient-" + warmIndex}
                    selectedValue={values.fervura.ingredientes[warmIndex].nome}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(ingredient) =>{
                      setFieldValue(`fervura.ingredientes[${warmIndex}].nome`, ingredient);
                      let ingredientSelected;
                      values.Ingredientes.map((ingredientItem) =>{
                        if(ingredientItem.nome == ingredient) {
                          ingredientSelected = ingredientItem;
                        }
                      })
                      setFieldValue(`fervura.ingredientes[${warmIndex}].quantidade`, ingredientSelected.quantidade);
                      setFieldValue(`fervura.ingredientes[${warmIndex}].unidadeMedida`, ingredientSelected.unidadeMedida);
                    }}
                  >
                    {values.Ingredientes.map(element => {
                      return <Picker.Item label={element.nome} value={element.nome} key={"ingredient-"+element.nome} />
                    })}
                </Picker>

                <InformationInput
                  key={"warmTime" + warmIndex}
                  placeholder={"Duração"}
                  onChangeText={handleChange(`fervura.ingredientes[${warmIndex}].tempo`)}
                  onBlur={handleBlur(`fervura.ingredientes[${warmIndex}].tempo`)}
                  value={values.fervura.ingredientes[warmIndex].tempo}
                />
                {/* <AmountInput
                  key={"nome" + index}
                  placeholder={"Ingrediente"}
                  onChangeText={handleChange(`fervura.ingredientes[${index}].nome`)}
                  onBlur={handleBlur(`fervura.ingredientes[${index}].nome`)}
                  value={values.fervura.ingredientes[index].nome}
                /> */}
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
      )}
      </Formik>
    </ContainerRecipeForm>
  )
};

export default RecipeFormCard;
