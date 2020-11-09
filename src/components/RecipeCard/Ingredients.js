import React, { Component, useEffect, useState, useContext } from 'react';
import { View, FlatList, Text } from 'react-native';
import { TabContainer, TabList, TabDescription } from './styles';

function Ingredients (props) {

  return (
    <TabContainer>
        <TabList
          sections={props.ingredientes}
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

export default Ingredients;
