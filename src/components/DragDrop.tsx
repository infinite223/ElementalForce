import { View, Text } from 'react-native'
import { GestureHandlerRootView, PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import React, { FC } from 'react'
import Animated, { runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'

type ContextType = {
    x: number,
    y: number
}

interface DragDropProps {
    children: JSX.Element | JSX.Element [],
    onDrag?(x: number, y: number):void,
    onDrop?(x: number, y: number):void
}

const DragDrop:FC<DragDropProps> = ({ children, onDrag, onDrop }) => {
    const x = useSharedValue(0)
    const y = useSharedValue(0)
    const scale = useSharedValue(1)

    const drag = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, ContextType>({
        onStart: (event, context) => {
            context.x = x.value
            context.y = y.value
        },
        onActive: (event, context) => {
            x.value = event.translationX + context.x
            y.value = event.translationY + context.y
            console.log(event.absoluteY)
            if(event.absoluteY<740 && event.absoluteY>570) {
                scale.value = 2.5
            }
            else {
                scale.value = 1.1
            }
            // if(event.absoluteY<450){
            //     scale.value = 1.1
            // }
            // else {
            //     scale.value = 2
            // }
            if(onDrag) {
                runOnJS(onDrag)(x.value, y.value)
            }
        },
        onEnd: (event) => {
            if(onDrop) {
                runOnJS(onDrop)(x.value, y.value)
                scale.value = 1
            }
        }
    })
  return (
    <PanGestureHandler onGestureEvent={drag}>
        <Animated.View
            style={[
                useAnimatedStyle(() => {
                    return {
                        transform: [
                            { translateX: x.value },
                            { translateY: y.value },
                            { scale: scale.value }
                        ]
                    }
                })
            ]}
        >
            {children}
        </Animated.View>
    </PanGestureHandler>
  )
}

export default DragDrop