import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Container, Cover, Image, Content, Title, Description} from './RecipeCardStyle';
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
      <Container>
        <Cover>
        </Cover>
        <Content style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <CookBook width={50} height={50}/>
          <Title>Malte</Title>
          <EditIcon width={30} height={30}/>
        </Content>
        <Description>Possui um sabor mais ameno. Bom para pessoas que não aguentam Heineken.</Description>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 8, paddingBottom: 8 }}>
          <View style={{alignItems: 'center'}}>
            <Clock  width={30} height={30} />
            <Text style={{color: 'white'}} >30min</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Beer width={30} height={30} />
            <Text style={{color: 'white'}}>3 Litros</Text>
          </View>
        </View>
        <RecipeTab/>
      </Container>
    );
  }
}

RecipeCard.propTypes = { title: PropTypes.string.isRequired };

export default RecipeCard;
