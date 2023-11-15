import { View, StyleSheet } from 'react-native'
import React, { FC } from 'react'
import { widthScreen } from '../../utils/constants'
import { Card } from '../../utils/data'
import SkillCard from './Cards/SkillCard'
import DragDrop from '../../components/DragDrop'

interface OwnBoardCards {
    cards: Card[]
}
const OwnBoardCards: FC<OwnBoardCards> = ({ cards }) => {

    const drag = (x: number, y: number) => {
        // console.log('drag', x, y)
      }
    
    const drop = (x: number, y: number) => {
        // console.log('drop', x, y)
    }
      
  return (
    <View style={styles.OwnBoardCardsContainer}>
        {cards.map((card) => 
            <DragDrop
                onDrag={drag}
                onDrop={drop}
            >
                <SkillCard card={card}/>
            </DragDrop>
        )}
    </View>
  )
}

export default OwnBoardCards

const styles = StyleSheet.create({
    OwnBoardCardsContainer: {
        position: 'absolute',
        bottom: 40,

        width: widthScreen - 50,
        // height: 140,
        backgroundColor: 'rgba(11, 34, 32, .2)',
        borderRadius: 5,

        zIndex: 1,


        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingHorizontal: 10,
        paddingVertical: 10
    } 
})