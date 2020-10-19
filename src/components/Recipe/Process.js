import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { Container, Cover, Content, List, TabDescription } from './TabSelectStyle';


class Process extends Component {
  render() {
    return (
      <Container>
          <List
            scrollEnabled
            stickySectionHeadersEnabled
            sections={[
              {title: '1. Aquecimento', data: ['70°C']},
              {title: '2. Brassagem', data: ['65°C 60min', '65°C 60min']},
              {title: '3. Fervura', data: ['15min', '30min', '40min']},
              {title: '4. Resfriamento', data: []},
            ]}
            renderItem={({item}) => <TabDescription style={{ textAlign: 'right'}}> {item}</TabDescription>}
            renderSectionHeader={({section}) => <TabDescription style={{ fontWeight: 'bold'}}>{section.title}</TabDescription>}
            bounces={false}
            keyExtractor={(item, index) => index}
          />
      </Container>
    );
  }
}

export default Process;


// renderItem={({section, item}) =>
// <View style={{ flex: 1, flexDirection: 'row',justifyContent: 'space-between' }}>
//   <Text>{section.title}</Text>
//   <Text>{item}</Text>
// </View>
