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
        contentContainerStyle={{gap: 3, padding: 1}}
        data={elementalsValues}
        renderItem={({item}) => 
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 3}}>
          <GradientProvider 
            cardType='elemental' 
            elemental={item} 
            style={{
              borderRadius: 50,
              // borderColor: item.type ==='atack'?'rgba(250, 110, 110, 1)':'rgba(250, 250, 250, .9)'
            }}
          >
            <View style={styles.elementalValue}>
              <Text style={[styles.elementalValueText]}>
                {item.power}
              </Text>
            </View>
          </GradientProvider>
          <Text style={styles.typeCard}>
            {item.type.at(0)?.toUpperCase()}
          </Text>
        </View>
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
    color: 'rgba(255, 255, 255, .8)',
    fontSize: 4,
    alignSelf:'center',
    fontWeight: '600'
  },
  typeCard: {
    fontSize: 4,
    color: 'white'
  }
})