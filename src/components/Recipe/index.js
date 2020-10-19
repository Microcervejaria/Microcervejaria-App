import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {ContainerRecipeCard, ContentRecipeCard, TitleRecipeCard, DescriptionRecipeCard, InfoRowRecipeCard, InfoComponentRecipeCard, InfoTextRecipeCard} from './styles';
import RecipeTab from './RecipeTab';
import { View, Text } from 'react-native';
import CookBook from '../../assets/icons/cookBook.svg';
import EditIcon from '../../assets/icons/editIcon.svg';
import Clock from '../../assets/icons/clock.svg';
import Beer from '../../assets/icons/beer.svg';

class RecipeCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ContainerRecipeCard>
        <ContentRecipeCard>
          <CookBook width={50} height={50}/>
          <TitleRecipeCard>Malte</TitleRecipeCard>
          <EditIcon width={30} height={30}/>
        </ContentRecipeCard>
        <DescriptionRecipeCard>Possui um sabor mais ameno. Bom para pessoas que não aguentam Heineken.</DescriptionRecipeCard>
        <InfoRowRecipeCard>
          <InfoComponentRecipeCard>
            <Clock  width={30} height={30} />
            <InfoTextRecipeCard>30min</InfoTextRecipeCard>
          </InfoComponentRecipeCard>
          <InfoComponentRecipeCard>
            <Beer width={30} height={30} />
            <InfoTextRecipeCard>3 Litros</InfoTextRecipeCard>
          </InfoComponentRecipeCard>
        </InfoRowRecipeCard>
        <RecipeTab/>
      </ContainerRecipeCard>
    );
  }
}

RecipeCard.propTypes = { title: PropTypes.string.isRequired };

export default RecipeCard;
