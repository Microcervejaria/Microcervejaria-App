import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {ContainerRecipeCard, ContentRecipeCard, TitleRecipeCard, DescriptionRecipeCard, InfoRowRecipeCard, InfoComponentRecipeCard, InfoTextRecipeCard} from './styles';
import RecipeTab from './RecipeTab';
import { View, Text, TouchableOpacity } from 'react-native';
import CookBook from '../../assets/icons/cookBook.svg';
import EditIcon from '../../assets/icons/editIcon.svg';
import Clock from '../../assets/icons/clock.svg';
import Beer from '../../assets/icons/beer.svg';
import RecipeContext from '../../contexts/recipe';

class RecipeCard extends Component {
  static contextType = RecipeContext;

  render() {
    return (
      <ContainerRecipeCard>
        <ContentRecipeCard>
          <CookBook width={45} height={45}/>
          <TitleRecipeCard>{this.context.data.nome}</TitleRecipeCard>
          <TouchableOpacity>
            <EditIcon width={30} height={30}/>
          </TouchableOpacity>
        </ContentRecipeCard>
        <DescriptionRecipeCard>{this.context.data.descricao}</DescriptionRecipeCard>
        <InfoRowRecipeCard>
          <InfoComponentRecipeCard>
            <Clock  width={30} height={30} />
            <InfoTextRecipeCard>{this.context.data.tempoMedio} min</InfoTextRecipeCard>
          </InfoComponentRecipeCard>
          <InfoComponentRecipeCard>
            <Beer width={30} height={30} />
            <InfoTextRecipeCard>{this.context.data.quantidadeLitros} Litros</InfoTextRecipeCard>
          </InfoComponentRecipeCard>
        </InfoRowRecipeCard>
        <RecipeTab />
      </ContainerRecipeCard>
    );
  }
}

export default RecipeCard;
