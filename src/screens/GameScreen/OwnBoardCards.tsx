import { View, StyleSheet } from 'react-native'
import React, { FC } from 'react'
import { widthScreen } from '../../utils/constants'
import { Card } from '../../utils/types'
import SkillCard from './Cards/SkillCard'
import DragDrop from '../../components/DragDrop'
import { databases } from '../../appWriteConfig'
import { useSharedValue } from 'react-native-reanimated'

interface OwnBoardCards {
    cards: Card[]
}
const OwnBoardCards: FC<OwnBoardCards> = ({ cards }) => {

    const drag = (x: number, y: number) => {
        // console.log('drag', x, y)
      }
    
    const drop = (x: number, y: number) => {
        // const promise = databases.listDocuments(
        //     '6557c6fc6b9c583de93c',
        //     '6557c71d64e2181cbe11',
        //  );
          
        // promise.then(function (response) {
        //     console.log(response);
        // }, function (error) {
        //     console.log(error);
        // });
    }
      
  return (
    <View style={styles.OwnBoardCardsContainer}>
        {cards.map((card, i) => 
            <DragDrop
                key={i}
                onDrag={drag}
                onDrop={drop}
                card={card}
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
        // backgroundColor: 'rgba(11, 34, 32, .2)',
        borderRadius: 5,

        zIndex: 1,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        gap: -35,
        paddingHorizontal: 5,
        paddingVertical: 5,
    } 
})