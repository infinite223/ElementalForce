import { View, Text, StyleSheet } from 'react-native'
import React, { FC } from 'react'
import { Card } from '../../../utils/data'

const SkillCard: FC<{card: Card}> = ({ card: { desc, elementalParams, name, type} }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.nameCard}>
        {name}
      </Text>
    </View>
  )
}

export default SkillCard

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'rgba(12, 159, 22, 1)',
        borderRadius: 5,
        width: 90,
        height: 130,
        zIndex: 3,
        alignItems:'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    nameCard: {
      fontSize: 10,
      color: 'white',
      fontWeight: '700',

    }
})