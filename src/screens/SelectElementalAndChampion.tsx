import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { heightScreen, widthScreen } from '../utils/constants'
import { ElementalsValues } from '../utils/types'
import GradientProvider from '../components/GradientProvider'
import { startChampion } from './GameScreen'

const Elementals = [
  ElementalsValues.Elemental_1,
  ElementalsValues.Elemental_2,
  ElementalsValues.Elemental_3,
  ElementalsValues.Elemental_4
]

const SelectElementalAndChampion = () => {
  const [selectedElemental, setSelectedElemental] = useState<ElementalsValues>(ElementalsValues.Elemental_1)
  
  const champions = [
    startChampion,
    startChampion,
    startChampion
  ]

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>
        Wybierz domene
      </Text>
      <FlatList
        data={Elementals}
        contentContainerStyle={{ gap: 10, marginHorizontal: 5}}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({ item }) => 
          <GradientProvider 
            elemental={item} 
            cardType='elemental'
            style={{borderRadius: 50, height: 50}}
          >
            <TouchableOpacity 
              onPress={() =>  setSelectedElemental(item)}
              style={styles.elementalItem}
            >
              <Text style={styles.elementalText}>{item}</Text>
            </TouchableOpacity>
          </GradientProvider>
        }
      />
      <Text style={styles.headerText}>
        Wybierz postać
      </Text>

      <FlatList
        data={champions}
        contentContainerStyle={{}}
        numColumns={2}
        renderItem={({ item }) => 
          <GradientProvider 
            elemental={selectedElemental} 
            cardType='elemental'
            style={{borderRadius: 5, margin: 5}}
          >
            <TouchableOpacity 
              onPress={() => {}}
              style={styles.championItem}
            >
              <Text style={styles.params}>
                {item.params.power}A / {item.params.block}B
              </Text>
              <Text style={styles.champName}>{item.name}</Text>
            </TouchableOpacity>
          </GradientProvider>
        }
      />
    </SafeAreaView>
  )
}

export default SelectElementalAndChampion

const styles = StyleSheet.create({
    headerText: {
      fontSize: 18,
      color: 'rgba(255, 255, 255, .8)',
      paddingHorizontal: 10,
      marginVertical: 15,
      fontWeight: '800',
    },
    container: {
        width: widthScreen,
        height: heightScreen,
        position: 'absolute',
        top: 0,
        left: 0,

        backgroundColor: 'black',
        zIndex:2,
        // alignItems:"center"
    },
    elementalItem: {
      height: 50,
      width: 150,
      alignItems:'center',
      justifyContent: 'center',
      borderRadius: 50
    },
    elementalText: {
      fontSize: 15,
      color: 'rgba(250, 250, 250, .7)',
      fontWeight:'900',
      textTransform: 'uppercase',
      fontStyle: 'italic',
      letterSpacing: 2
    },
    championItem: {
      height: 250,
      width: 150,

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
    }
})