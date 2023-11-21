import { View, Text, StyleSheet } from 'react-native'
import React, {FC} from 'react'
import GradientProvider from './GradientProvider'
import { Card } from '../utils/types'

const CardBack:FC<{card: Card}> = ({ card: {elementalParams} }) => {
    const findMaxPowerElemental = () => {
        let findingMax = elementalParams[0];
  
        for (let i = 0; i < elementalParams.length; i++) {
          if(elementalParams[i].power>=findingMax.power) {
            findingMax = elementalParams[i]
          }
        }
  
        return findingMax
      }
  
      const cardElemental = findMaxPowerElemental()
      console.log(cardElemental)
  return (
    <GradientProvider elemental={cardElemental.name} style={{borderRadius: 2}} cardType='skill'>
        <View style={styles.cardContainer}>
            <Text style={styles.firstLetter}>
                E
            </Text>
            <Text style={styles.secendLetter}>
                F
            </Text>
        </View>
    </GradientProvider>
  )
}

export default CardBack

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 2,
        width: 75,
        height: 120,
        zIndex: 3,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal: 2,
        paddingVertical: 2,
        borderWidth: 1,
        borderColor: 'rgba(200, 100, 209, .3)',
        gap: -10
    },
    firstLetter: {
        fontSize: 24,
        color: 'rgba(200, 200, 200, .6)',
        fontWeight:'bold',
        left: -5
    },
    secendLetter: {
        fontSize: 18,
        color: 'rgba(200, 200, 200, .6)',

        fontWeight:'bold',
        left: 5
    }
})