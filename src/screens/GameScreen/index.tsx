import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { heightScreen, widthScreen } from '../../utils/constants'
import SkillCard from './Cards/SkillCard'
import ChampCard from './Cards/ChampCard'

const Game = () => {
  return (
    <View style={styles.gameContainer}>
      <SkillCard/>
      <ChampCard/>
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

        backgroundColor: 'white',
        zIndex: 3,

        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 10
    } 
})