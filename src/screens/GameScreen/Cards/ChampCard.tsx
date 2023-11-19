import { View, Text, StyleSheet } from 'react-native'
import React, { FC } from 'react'
import GradientProvider from '../../../components/GradientProvider'
import { heightScreen, widthScreen } from '../../../utils/constants'
import { Champ, SpellCardsValues } from '../../../utils/types'

const ChampCard:FC<{champ: Champ, enemy: boolean}> = ({enemy, champ: { desc, element, name, params }}) => {

  return (
    <View style={[styles.cardContainer, {
      top: enemy?0:'auto', height: enemy?heightScreen/2.42: heightScreen / 1.7}]}>
        <GradientProvider elemental={element} style={{flex: 1, opacity: .7}} cardType='champ'>
          <View style={[styles.cardContent, {justifyContent: enemy?'flex-end':'flex-start'}]}>
            <Text style={styles.cardName}>
              {name}
            </Text>

            <View>
              <Text style={styles.powerText}>
                {params.power}A / {params.block}B
              </Text>
              <Text style={styles.passiveText}>
                {params.passive}
              </Text>
            </View>

            <Text style={styles.powerText}>
                {desc}
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
    },
    cardContent: {
      gap: 10,
      padding: 15,
      flex: 1
    },
    cardName: {
      color: 'white',
      fontSize: 16,
      fontWeight: '900'
    },
    powerText: {
      fontSize: 20,
      fontWeight: '900',
      color: 'white',
    },
    passiveText: {
      fontWeight: '300',
      fontSize: 14,
      color: 'white'
    }
})