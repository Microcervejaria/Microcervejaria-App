import React, { Component, useEffect, useState, useContext } from 'react';
import { View, FlatList, Text } from 'react-native';
import { TabContainer, TabList, TabDescription } from './styles';
import RecipeContext from '../../contexts/recipe';
// const data =  [
//   {
//       nome: "Água",
//       quantidade: "21",
//       unidadeMedida: "L"
//   },
//   {
//       nome: "Malte Pielsen",
//       quantidade: "5",
//       unidadeMedida: "Kg"
//   },
//   {
//       nome: "Malte Melanoidina",
//       quantidade: "1",
//       unidadeMedida: "Kg"
//   },
//   {
//       nome: "Lúpulo Herkules",
//       quantidade: "20",
//       unidadeMedida: "g"
//   },
//   {
//       nome: "Lúpulo Cascade",
//       quantidade: "80",
//       unidadeMedida: "g"
//   },
//   {
//       nome: "Lúpulo Columbus",
//       quantidade: "80",
//       unidadeMedida: "g"
//   },
//   {
//       nome: "Fermento US05",
//       quantidade: "1",
//       unidadeMedida: "pct"
//   }
// ];

// const data2 = data.map(obj => {
//   let rObj = {};
//   rObj['title'] = obj.nome;
//   rObj['data'] = [obj.quantidade + ' ' + obj.unidadeMedida];
//   return rObj;
// });

// console.log(data2);

function Ingredients (props) {
  // const recipeContext = useContext(RecipeContext);

  // const [ingredientsData, setIngredientsData] = useState([]);

  // useEffect(() => {
  //   console.log("ENTROU TRISTE");
  //   const dataIngredients = [];
  //   recipeContext.data.Ingredientes.forEach(function (obj) {
  //     dataIngredients.push({"title": obj.nome,"data": [obj.quantidade + ' ' + obj.unidadeMedida]});
  //   });
  //   setIngredientsData(dataIngredients);
  // }, [])


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


// renderItem={({section, item}) =>
// <View style={{ flex: 1, flexDirection: 'row',justifyContent: 'space-between' }}>
//   <Text>{section.title}</Text>
//   <Text>{item}</Text>
// </View>
