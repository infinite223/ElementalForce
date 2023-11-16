import { View, Text, StyleSheet } from 'react-native'
import React, { FC } from 'react'
import { Card } from '../../../utils/data'
import GradientProvider from '../../../components/GradientProvider'

const SkillCard: FC<{card: Card}> = ({ card: { desc, elementalParams, name, type} }) => {
  const detectElemental = elementalParams.wind > elementalParams.water?0:1

  return (
    <GradientProvider elemental={detectElemental} style={{borderRadius: 2}}>
      <View style={styles.cardContainer}>
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
        borderColor: 'rgba(11, 11, 9, .1)',
    },
    nameCard: {
      fontSize: 8,
      color: 'white',
      fontWeight: '700',
    }
})