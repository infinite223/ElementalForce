import { View, Text, StyleSheet } from 'react-native'
import { GestureHandlerRootView, PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import React, { FC, useState } from 'react'
import Animated, { 
    interpolate,
    runOnJS, 
    useAnimatedGestureHandler, 
    useAnimatedStyle, 
    useSharedValue, 
    withSpring,
    withTiming,
 } from 'react-native-reanimated'
import CardBack from './CardBack';
import { Card } from '../utils/data';

type ContextType = {
    x: number,
    y: number
}

interface DragDropProps {
    children: JSX.Element | JSX.Element [],
    onDrag?(x: number, y: number):void,
    onDrop?(x: number, y: number):void,
    card: Card
}

const DragDrop:FC<DragDropProps> = ({card,  children, onDrag, onDrop }) => {
    const x = useSharedValue(0)
    const y = useSharedValue(0)
    const scale = useSharedValue(1)
    const rotateX = useSharedValue('0deg')

    const [active, setActive] = useState(false)
    const rotate = useSharedValue(0);

    const [start, setStart] = useState<null | {x: number, y: number }>(null)

    const drag = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, ContextType>({
        onStart: (event, context) => {
            context.x = x.value
            context.y = y.value

            runOnJS(setStart)({x: context.x, y: context.y})
        },
        onActive: (event, context) => {
            x.value = event.translationX + context.x
            y.value = event.translationY + context.y
            runOnJS(setActive)(true)

            if (event.absoluteY < 700 && event.absoluteY > 470) {
                scale.value = withTiming(2.5, {}, () => {
                  if (onDrag) {
                    runOnJS(onDrag)(x.value, y.value);
                  }
                });
            } else {
                scale.value = withTiming(1.1, { }, () => {
                    if (onDrag) {
                        runOnJS(onDrag)(x.value, y.value);
                    }
                });
            }
        },
        onEnd: (event) => {
            runOnJS(setActive)(false)

            if(onDrop) {
                runOnJS(onDrop)(x.value, y.value)
                scale.value = withTiming(1, { });

                if (event.absoluteY < 250) {
                    console.log('drop', event.absoluteY, event.translationY)

                    rotateX.value = withSpring('360deg')
                    rotate.value = rotate.value?0:1
                    // scale.value = withSpring(1, { });
                }
                else {
                    if(start) {
                        x.value = start.x
                        y.value = start.y
                    }
                }
            }
        }
    })

    const frontAnimatedStyles = useAnimatedStyle(()=>{
      const rotateValue = interpolate(rotate.value,[0,1],[0,180])
      return{
        transform:[
          {
            rotateY : withTiming(`${rotateValue}deg`,{duration:1000})
          }
        ]
      }
    })
    const backAnimatedStyles = useAnimatedStyle(()=>{
      const rotateValue = interpolate(rotate.value,[0,1],[180,360])
      return{
        transform:[
          {
            rotateY : withTiming(`${rotateValue}deg`,{duration:1000})
          }
        ]
      }
    })

  return (
    <PanGestureHandler onGestureEvent={drag}>
        <Animated.View
            style={[
                {zIndex: active?10: 2},
                useAnimatedStyle(() => {
                    return {
                        transform: [
                            { translateX: x.value },
                            { translateY: y.value },
                            { scale: scale.value },
                            { rotateY: rotateX.value }
                        ],
                        
                    }
                })
            ]}
        >
            <View>
                <Animated.View style={[styles.frontcard, styles.cardContainer, frontAnimatedStyles]}>
                    {children}
                </Animated.View>

                <Animated.View style={[styles.backcard, backAnimatedStyles]}>
                    <CardBack card={card}/>
                </Animated.View>
            </View>
        </Animated.View>
    </PanGestureHandler>
  )
}

export default DragDrop

const styles = StyleSheet.create({
    frontcard: {
      backfaceVisibility:'hidden',
      position:"absolute",
    },
    backcard: {
      backfaceVisibility:"hidden",
    },
    cardContainer: {
        borderRadius: 2,
        width: 75,
        height: 120,
        zIndex: 3,
        alignItems:'flex-start',
        justifyContent:'flex-end',
        paddingHorizontal: 2,
        paddingVertical: 2,
        borderWidth: 1,
        borderColor: 'rgba(200, 200, 209, .1)',
        gap: 2
    },
})