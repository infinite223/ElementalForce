import { View, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import { heightScreen, widthScreen } from '../../utils/constants'
import ChampCard from './Cards/ChampCard'
import OwnBoardCards from './OwnBoardCards'
import { Card, Champ, ElementalsValues, PassiveValues } from '../../utils/types'

const spellsJson = require('./../../utils/cards/spells/spells.json');
const enemyChampion: Champ = {
  desc: '',
  element: ElementalsValues.Elemental_1,
  name: "Skorpion cienia",
  params: {
    block: 140,
    power: 220,
    passive: PassiveValues.Passive_1
  }
}

const startChampion: Champ = {
  desc: '',
  element: ElementalsValues.Elemental_2,
  name: "Rycerz wody",
  params: {
    block: 100,
    power: 240,
    passive: PassiveValues.Passive_1
  }
}

const Game = () => {
  const [cards, setCards] = useState<Card [] | null>(null)

  useEffect(() => {
    setCards(spellsJson);
  }, []);

  return (
      <View style={styles.gameContainer}>
        <ChampCard
          enemy={true}
          champ={enemyChampion}
        />

        <ChampCard
          enemy={false}
          champ={startChampion}
        />

        {cards&&<OwnBoardCards cards={cards}/>}
      </View>
  )
}

export default Game

const styles = StyleSheet.create({
    gameContainer: {
        position: 'absolute',
        left: 0,
        top: 0,

        width: widthScreen,
        height: heightScreen,

        backgroundColor: 'black',
        zIndex: 3,

        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 10
    } 
})