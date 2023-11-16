import { View, FlatList, StyleSheet, Text } from 'react-native'
import React, { FC } from 'react'
import { elementalParamsType } from '../utils/data'
import GradientProvider from './GradientProvider'

interface ElementalsValuesProps {
  elementalsValues: elementalParamsType[]
}

const ElementalsValues:FC<ElementalsValuesProps> = ({elementalsValues}) => {
  return (
      <FlatList
        scrollEnabled={false}
        contentContainerStyle={{gap: 2, padding: 1}}
        data={elementalsValues}
        renderItem={({item}) => 
          <GradientProvider cardType='elemental' elemental={item} style={{borderRadius: 50}}>
            <View style={styles.elementalValue}>
              <Text style={styles.elementalValueText}>
                {item.power}
              </Text>
            </View>
          </GradientProvider>
        }
      />
  )
}

export default ElementalsValues

const styles = StyleSheet.create({
  elementalValue: {
    borderRadius: 50,
    backgroundColor: 'rgba(11, 11, 11, .4)',
    width:13,
    height: 13,
    alignItems: 'center',
    justifyContent:'center'
  },
  elementalValueText: {
    color: 'white',
    fontSize: 4,
    alignSelf:'center',
    fontWeight: '600'
  }
})