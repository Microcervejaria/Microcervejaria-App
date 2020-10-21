import React, { useEffect, useState, useContext } from 'react';
import { View, FlatList, Text } from 'react-native';
import { TabContainer, TabList, TabDescription } from './styles';
import RecipeContext from '../../contexts/recipe';

// const aquecimento = [{temperatura: "67"}];

// const brasagem= [
//   {
//     tempo: "60",
//     temperatura: "64"
//   },
//   {
//     tempo: "15",
//     temperatura: "77"
//   }
// ];

// const fervura= {
//   tempoTotal: "60",
//   ingredientes: [
//       {
//           tempo: "60",
//           nome: "Herkules",
//           quantidade: "20",
//           unidadeMedida: "g"
//       },
//       {
//           tempo: "10",
//           nome: "Columbus",
//           quantidade: "30",
//           unidadeMedida: "g"
//       },
//       {
//           tempo: "5",
//           nome: "Cascade",
//           quantidade: "30",
//           unidadeMedida: "g"
//       },
//       {
//           tempo: "0",
//           nome: "Cascade",
//           quantidade: "20",
//           unidadeMedida: "g"
//       },
//       {
//           tempo: "0",
//           nome: "Columbus",
//           quantidade: "20",
//           unidadeMedida: "g"
//       }
//   ]
// };

// // const aquecimento2 = aquecimento.map(obj => {
// //   const rObj = {};
// //   rObj['data'] = rObj.push(obj.temperatura + '°C') || [];
// // })


// const aquecimento_data = {'title': '1. Aquecimento', 'data': []}
// aquecimento.forEach(function (obj) {
//   aquecimento_data['data'].push(obj.temperatura + '°C');
// });
// console.log(aquecimento_data);

// const brasagem_data = {'title': '2. Brasagem', 'data':[]};
// brasagem.forEach(function (obj) {
//   brasagem_data['data'].push(obj.temperatura + '°C ' + obj.tempo + ' min');
// });
// console.log(brasagem_data);

// const fervura_data = {'title': '3. Fervura', 'data': [fervura.tempoTotal]};
// console.log(fervura_data);

function Process(props) {
  const recipeContext = useContext(RecipeContext);
  // console.log("ENTROU!");
  // console.log(recipeContext.loading);
  // console.log(recipeContext);
  // console.log("SAIU!");

  // const [warmData, setWarmData] = useState({'title': '1. Aquecimento', 'data': []});
  // const [brazingData, setBrazingData] = useState({'title': '2. Brasagem', 'data':[]});
  // const [boilData, setBoilData] = useState({'title': '3. Fervura', 'data': [recipeContext.data.fervura.tempoTotal]});

  // const [warmData, setWarmData] = useState({'title': '1. Aquecimento', 'data': [recipeContext.data.aquecimento.temperatura + '°C']});
  // const [brazingData, setBrazingData] = useState({'title': '2. Brasagem', 'data':[]});
  // const [boilData, setBoilData] = useState({'title': '3. Fervura', 'data': [recipeContext.data.fervura.tempoTotal + ' min']});

  // useEffect(() => {
  //   const dataBrazing = [];
  //   recipeContext.data.brassagem.forEach(function (obj) {
  //     dataBrazing.push(obj.temperatura + '°C ' + obj.tempo + ' min');
  //   });
  //   setBrazingData({'title': '2. Brasagem', 'data': dataBrazing});
  // }, [])

  return (
    <TabContainer>
        <TabList
          scrollEnabled
          stickySectionHeadersEnabled
          sections={[
            props.aquecimento,
            props.brasagem,
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


// renderItem={({section, item}) =>
// <View style={{ flex: 1, flexDirection: 'row',justifyContent: 'space-between' }}>
//   <Text>{section.title}</Text>
//   <Text>{item}</Text>
// </View>
