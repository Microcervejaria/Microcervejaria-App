import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { TabContainer, TabList, TabDescription } from './styles';
class Ingredients extends Component {
  render() {
    return (
      <TabContainer>
          <TabList
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
      </TabContainer>
    );
  }
}

export default Ingredients;


// renderItem={({section, item}) =>
// <View style={{ flex: 1, flexDirection: 'row',justifyContent: 'space-between' }}>
//   <Text>{section.title}</Text>
//   <Text>{item}</Text>
// </View>
