import React, { Component } from 'react';
import {
  ContainerRecipeCard,
  ContentRecipeCard,
  TitleRecipeCard,
  DescriptionRecipeCard,
  InfoRowRecipeCard,
  InfoComponentRecipeCard,
  InfoTextRecipeCard,
  TabContainer,
  TabList,
  TabDescription,
} from './styles';
import RecipeTab from './RecipeTab';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import CookBook from '../../assets/icons/cookBook.svg';
import EditIcon from '../../assets/icons/editIcon.svg';
import Clock from '../../assets/icons/clock.svg';
import Beer from '../../assets/icons/beer.svg';

export default function RecipeCard(props) {
  const { navigate } = useNavigation();

  return (
    <ContainerRecipeCard>
      <ContentRecipeCard>
        <CookBook width={45} height={45}/>
        <TitleRecipeCard>{props.data.nome}</TitleRecipeCard>
        <TouchableOpacity>
          <EditIcon width={30} height={30}/>
        </TouchableOpacity>
      </ContentRecipeCard>
      <DescriptionRecipeCard>{props.data.descricao}</DescriptionRecipeCard>
      <InfoRowRecipeCard>
        <InfoComponentRecipeCard>
          <Clock  width={30} height={30} />
          <InfoTextRecipeCard>{props.data.tempoMedio} min</InfoTextRecipeCard>
        </InfoComponentRecipeCard>
        <InfoComponentRecipeCard>
          <Beer width={30} height={30} />
          <InfoTextRecipeCard>{props.data.quantidadeLitros} Litros</InfoTextRecipeCard>
        </InfoComponentRecipeCard>
      </InfoRowRecipeCard>
      <RecipeTab data={props.data} />
    </ContainerRecipeCard>
  );
}
