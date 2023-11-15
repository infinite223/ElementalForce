import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient';

const ChampCard = () => {
  return (
    <View style={styles.cardContainer}>
      <Text>

      </Text>
    </View>
  )
}

export default ChampCard

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'rgba(92, 129, 22, .8)',
        borderRadius: 5,
        width: 160,
        height: 130
    }
})