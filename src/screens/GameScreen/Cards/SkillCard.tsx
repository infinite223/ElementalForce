import { View, Text, StyleSheet } from 'react-native'
import React, { FC } from 'react'
import { Card } from '../../../utils/data'
import GradientProvider from '../../../components/GradientProvider'
import ElementalsValues from '../../../components/ElementalsValues'

const SkillCard: FC<{card: Card}> = ({ card: { desc, elementalParams, name} }) => {
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
    <GradientProvider elemental={cardElemental} style={{borderRadius: 2}} cardType='skill'>
      <View style={styles.cardContainer}>

        <ElementalsValues elementalsValues={elementalParams}/>

        <View  style={styles.descCard}>
          <Text style={styles.descCardText}>
            {desc}
          </Text>
        </View>
        <Text style={styles.nameCard}>
          {name}
        </Text>
      </View>
    </GradientProvider>
  )
}

export default SkillCard

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 2,
        width: 75,
        height: 120,
        zIndex: 3,
        alignItems:'flex-start',
        justifyContent:'flex-end',
        paddingHorizontal: 2,
        paddingVertical: 2,
        borderWidth: 1,
        borderColor: 'rgba(200, 200, 209, .2)',
        gap: 2
    },
    nameCard: {
      fontSize: 8,
      color: 'white',
      fontWeight: '700',
    },
    descCard: {
      backgroundColor: 'rgba(11, 11, 11, .2)',
      borderRadius: 3,
      paddingHorizontal: 3,
      paddingVertical:1
    },
    descCardText: {
      fontSize: 4,
      color: 'white',
    }
})