import { View, Text, StyleSheet } from 'react-native'
import React, { FC } from 'react'
import { Card } from '../../../utils/data'
import GradientProvider from '../../../components/GradientProvider'

const SkillCard: FC<{card: Card}> = ({ card: { desc, elementalParams, name, type} }) => {
  const detectElemental = elementalParams.wind > elementalParams.water?0:1

  return (
    <GradientProvider elemental={detectElemental}>
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
        borderRadius: 5,
        width: 90,
        height: 130,
        zIndex: 3,
        alignItems:'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    nameCard: {
      fontSize: 8,
      color: 'white',
      fontWeight: '700',

    }
})