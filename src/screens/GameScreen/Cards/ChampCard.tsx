import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import GradientProvider from '../../../components/GradientProvider'
import { heightScreen, widthScreen } from '../../../utils/constants'

const ChampCard = () => {
  return (
    <View style={styles.cardContainer}>
        <GradientProvider elemental={1} style={{flex: 1, opacity: .7}}>
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