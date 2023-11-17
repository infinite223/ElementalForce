import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import { heightScreen, widthScreen } from '../../utils/constants'
import SkillCard from './Cards/SkillCard'
import ChampCard from './Cards/ChampCard'
import DragDrop from '../../components/DragDrop'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Card, basicCards } from '../../utils/data' 
import OwnBoardCards from './OwnBoardCards'
import { databases } from '../../appWriteConfig'

const spellsJson = require('./../../utils/cards/spells/spells.json');

const Game = () => {
  const [cards, setCards] = useState<Card[] | null>(null)

  useEffect(() => {
    // Wczytaj dane z pliku JSON po zamontowaniu komponentu
    setCards(spellsJson);
  }, []);

  return (
      <View style={styles.gameContainer}>
        <ChampCard/>

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