import { View, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import { heightScreen, widthScreen } from '../../utils/constants'
import ChampCard from './Cards/ChampCard'
import OwnBoardCards from './OwnBoardCards'
import { Card, Champ, ElementalsValues, PassiveValues, gameState } from '../../utils/types'
import { selectGameState } from '../../slices/gameStateSlice'
import { useSelector } from 'react-redux'
import client, { DATABASE_ID } from '../../appWriteConfig'
import 'react-native-url-polyfill/auto';

const spellsJson = require('./../../utils/cards/spells/spells.json');
const championsJson = require('./../../utils/cards/champs/champs.json');
const enemyChampion: Champ = {
  id: 1,
  desc: '',
  element: ElementalsValues.Elemental_1,
  name: "Skorpion cienia",
    block: 140,
    power: 220,
    passive: PassiveValues.Passive_1
}

export const startChampion: Champ = {
  id:2,
  desc: '',
  element: ElementalsValues.Elemental_2,
  name: "Rycerz wody",
    block: 100,
    power: 240,
    passive: PassiveValues.Passive_1
}

const Game = () => {
  const [cards, setCards] = useState<Card [] | null>(null)
  const { gameState }:{gameState: gameState | null } = useSelector(selectGameState)
  const findEnemy = championsJson.find((champ: Champ) => champ.id === gameState?.champ_2_id)
  const findMe = championsJson.find((champ: Champ) => champ.id === gameState?.champ_1_id)
 
  useEffect(() => {
    setCards(spellsJson);
  }, []);
  const collectionId = "6557c71d64e2181cbe11"
  useEffect(() => {  
    const unsubscribe = client.subscribe(`account`, response => {
      console.log(response.channels)
      // databases.${DATABASE_ID}.collections.${collectionId}.documents.${"655d1b1fb23f07950c13"}
        // if(response.events.includes("databases.*.collections.*.documents.*.create")){
        //     console.log('A MESSAGE WAS CREATED')
        //     console.log(response.payload, "a")
        // }

        // if(response.events.includes("databases.*.collections.*.documents.*.delete")){
        //     console.log('A MESSAGE WAS DELETED!!!')
        //     console.log(response.payload, "d")
        // }
    });

    console.log('unsubscribe:', unsubscribe)
  
    return () => {
      unsubscribe();
    };
  }, []);

  if(!gameState) {
    return;
  }

  return (
      <View style={styles.gameContainer}>
        <ChampCard
          enemy={true}
          champ={findEnemy}
        />

        <ChampCard
          enemy={false}
          champ={findMe}
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