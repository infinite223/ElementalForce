import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { heightScreen, widthScreen } from '../utils/constants'
import { Champ, ElementalsValues, elementals, gameState } from '../utils/types'
import GradientProvider from '../components/GradientProvider'
import { startChampion } from './GameScreen'
import { globalStyles } from '../utils/globalStyles'
import { databases } from '../appWriteConfig'
import { ID } from 'appwrite'
const champsJson = require('./../utils/cards/champs/champs.json');

const Elementals = [
  ElementalsValues.Elemental_1,
  ElementalsValues.Elemental_2,
  ElementalsValues.Elemental_3,
  ElementalsValues.Elemental_4
]

const SelectElementalAndChampion = () => {
  const [selectedElemental, setSelectedElemental] = useState<ElementalsValues>(ElementalsValues.Elemental_1)
  const [selectedChampion, setSelectedChampion] = useState<Champ | null>(null)
  
  const champions = [
    startChampion,
    startChampion,
    startChampion
  ]

  const getChampions = (elemental: elementals) => {
   return  champsJson.filter((champ: Champ) => champ.element === elemental )
  }  

  const initGameState = () => {
    if(selectedChampion) {
      const gameState = {
        id: "1",
        // user_2_id: "2",
        card_1_id: 1,
        card_2_id: 2,
        champ_1_id: 1,
        champ_2_id: 2,
        // users: [
        //   {
        //     id: "1",
        //     name: "Marcin",
        //     card: null,
        //     champ: selectedChampion
        //   },
        //   {
        //     id: "2",
        //     name: "Zbysio",
        //     card: null,
        //     champ: champsJson[0 ]
        //   },
        // ]
      } 

      const promise = databases.createDocument(
        '6557c6fc6b9c583de93c',
        '6557c71d64e2181cbe11',
        ID.unique(),
        gameState,
      );
        
      promise.then(function (response) {
          console.log(response);
      }, function (error) {
          console.log(error);
      });

    }
  }

  return (
    <GradientProvider
      elemental={selectedElemental}
      cardType='background'
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>
          Wybierz domene
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10, justifyContent: 'center', alignSelf: 'center'}}>
          <GradientProvider 
            elemental={Elementals[2]} 
            cardType='elemental'
            style={{
              borderRadius: 50, height: 100, width: 100,
              borderColor: 'rgba(255, 255, 255, .3)',
              borderWidth: selectedElemental === Elementals[2]?1:0
            }}
          >
            <TouchableOpacity 
              onPress={() => {
                 setSelectedElemental(Elementals[2])
                 setSelectedChampion(null)
              }}
              style={styles.elementalItem}
            >
              <Text style={styles.elementalText}>{Elementals[2]}</Text>
            </TouchableOpacity>
          </GradientProvider> 
          <GradientProvider 
            elemental={Elementals[0]} 
            cardType='elemental'
            style={{
              borderRadius: 50, height: 100, width: 100,
              borderColor: 'rgba(255, 255, 255, .3)',
              borderWidth: selectedElemental === Elementals[0]?1:0
            }}
          >
            <TouchableOpacity 
                onPress={() => {
                  setSelectedElemental(Elementals[0])
                  setSelectedChampion(null)
               }}
              style={styles.elementalItem}
            >
              <Text style={styles.elementalText}>{Elementals[0]}</Text>
            </TouchableOpacity>
          </GradientProvider> 
          <GradientProvider 
            elemental={Elementals[1]} 
            cardType='elemental'
            style={{
              borderRadius: 50, height: 100, width: 100,
              borderColor: 'rgba(255, 255, 255, .3)',
              borderWidth: selectedElemental === Elementals[1]?1:0
            }}
          >
            <TouchableOpacity 
              onPress={() => {
                  setSelectedElemental(Elementals[1])
                  setSelectedChampion(null)
              }}
              style={styles.elementalItem}
            >
              <Text style={styles.elementalText}>{Elementals[1]}</Text>
            </TouchableOpacity>
          </GradientProvider> 
        </View>
        {/* <FlatList
          data={Elementals}
          contentContainerStyle={{ gap: 10, marginHorizontal: 5, maxWidth: widthScreen}}
          
          style={{ flexGrow: 0}}
          showsHorizontalScrollIndicator={false}
          
          horizontal
          renderItem={({ item }) => 
            <GradientProvider 
              elemental={item} 
              cardType='elemental'
              style={{
                borderRadius: 50, height: 100, width: 100,
                borderColor: 'rgba(255, 255, 255, .3)',
                borderWidth: selectedElemental === item?1:0
              }}
            >
              <TouchableOpacity 
                onPress={() =>  setSelectedElemental(item)}
                style={styles.elementalItem}
              >
                <Text style={styles.elementalText}>{item}</Text>
              </TouchableOpacity>
            </GradientProvider>
          }
        /> */}
        <Text style={styles.headerText}>
          Wybierz postać
        </Text>
        <View style={{flex: 1}}>
        <FlatList
          data={getChampions(selectedElemental)}
          contentContainerStyle={{ }}
          style={{}}
          numColumns={2}
          renderItem={({ item }) => 
            <GradientProvider 
              elemental={selectedElemental} 
              cardType='elemental'
              style={[{
                borderRadius: 5, margin: 5,
                borderColor: 'rgba(255, 255, 255, .3)',
                borderWidth: selectedChampion === item?1:0
              }]}
            >
              <TouchableOpacity 
                onPress={() => setSelectedChampion(item)}
                style={[styles.championItem]}
              >
                <Text style={styles.params}>
                  {item.params.power}A / {item.params.block}B
                </Text>
                <Text style={styles.champName}>{item.name}</Text>
              </TouchableOpacity>
            </GradientProvider>
          }
        />
        </View>

        {selectedChampion&&
          <GradientProvider
            elemental={selectedElemental}
            cardType='elemental'
            style={styles.button}
          >
            <TouchableOpacity
              onPress={initGameState}
              style={styles.button}
            >
                <Text style={styles.buttonText}>
                  Szukaj gry
                </Text>
            </TouchableOpacity>
          </GradientProvider>
        }
      </SafeAreaView>
    </GradientProvider> 
  )
}

export default SelectElementalAndChampion

const styles = StyleSheet.create({
    headerText: {
      fontSize: 18,
      color: 'rgba(255, 255, 255, .8)',
      paddingHorizontal: 10,
      marginVertical: 25,
      fontWeight: '800',
      textAlign:'center',
      alignSelf:'center',
      letterSpacing: 1
    },
    container: {
        width: widthScreen,
        height: heightScreen,
        position: 'absolute',
        top: 0,
        left: 0,

        // backgroundColor: 'black',
        zIndex:2,
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    elementalItem: {
      height: 100,
      width: 100,
      alignItems:'center',
      justifyContent: 'center',
      borderRadius: 50
    },
    elementalText: {
      fontSize: 12,
      color: 'rgba(250, 250, 250, 1)',
      fontWeight:'900',
      textTransform: 'uppercase',
      fontStyle: 'italic',
      letterSpacing: 2
    },
    championItem: {
      height: 270,
      width: (widthScreen/2) - 10,

      borderRadius: 5,
      padding: 10,
      justifyContent: 'flex-end',
      gap: 5
    },
    champName: {
      color: 'white',
      fontSize: 14,
      fontWeight: '800'
    },
    params: {
      color: 'white',
      fontSize: 12,
      fontWeight: '500'
    },
    button: {
      borderRadius: 50,
      paddingVertical: 15,

      // position: 'absolute',
      // bottom: 20,
      flexDirection: 'row',
      height: 55,
      width: widthScreen - 20,
      alignSelf:'center',
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonText: {
      color: "white",
      fontWeight: '800',
      fontSize: 17
    }
})