import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { Container, Cover, Content, List, TabDescription } from './TabSelectStyle';


class Recipe extends Component {
  render() {
    return (
      <Container>
          <List
            sections={[
              {title: '20L', data: ['Água para Malte']},
              {title: '14L', data: ['Água para extração']},
              {title: '5000Kg', data: ['Malte Pilsen BWS']},
              {title: '24g', data: ['Lúpulo Spalter Select']},
              {title: '11.5g', data: ['Fermento Fermentis ']},
            ]}
            renderItem={({section}) =>
            <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
              <TabDescription> {section.title}</TabDescription>
              <TabDescription> {section.data}</TabDescription>
            </View>
            }
            keyExtractor={(item, index) => index
            }
          />
      </Container>
    );
  }
}

export default Recipe;


// renderItem={({section, item}) =>
// <View style={{ flex: 1, flexDirection: 'row',justifyContent: 'space-between' }}>
//   <Text>{section.title}</Text>
//   <Text>{item}</Text>
// </View>
