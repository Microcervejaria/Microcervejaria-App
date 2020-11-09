import React, { useEffect, useState, useContext } from 'react';
import { View, FlatList, Text } from 'react-native';
import { TabContainer, TabList, TabDescription } from './styles';

function Process(props) {
  return (
    <TabContainer>
        <TabList
          scrollEnabled
          stickySectionHeadersEnabled
          sections={[
            props.aquecimento,
            props.brassagem,
            props.fervura,
            {title: '4. Resfriamento', data: []},
          ]}
          renderItem={({item}) => <TabDescription style={{ textAlign: 'right'}}> {item}</TabDescription>}
          renderSectionHeader={({section}) => <TabDescription style={{ fontWeight: 'bold'}}>{section.title}</TabDescription>}
          bounces={false}
          keyExtractor={(item, index) => index}
        />
    </TabContainer>
  );
}

export default Process;
