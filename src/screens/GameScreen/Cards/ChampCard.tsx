import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import GradientProvider from '../../../components/GradientProvider'
import { heightScreen, widthScreen } from '../../../utils/constants'
import { elementals, spellCardsType } from '../../../utils/data'

const ChampCard = () => {
const findElemental: {name: elementals, power: number, type: spellCardsType } = {name: "darkus", power: 20,  type: "block"}

  return (
    <View style={styles.cardContainer}>
        <GradientProvider elemental={findElemental} style={{flex: 1, opacity: .7}} cardType='champ'>
          <View>
            <Text>

            </Text>
          </View>
        </GradientProvider>
    </View>
  )
}

export default ChampCard

const styles = StyleSheet.create({
    cardContainer: {
        position: 'absolute',
        bottom: 0,
        borderRadius: 5,
        width: widthScreen,
        height: heightScreen / 1.7,

    }
})