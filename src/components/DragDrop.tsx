import { View, Text } from 'react-native'
import { GestureHandlerRootView, PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import React, { FC, useState } from 'react'
import Animated, { 
    runOnJS, 
    useAnimatedGestureHandler, 
    useAnimatedStyle, 
    useSharedValue, 
    withSpring,
    withTiming
 } from 'react-native-reanimated'

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
    const rotateX = useSharedValue('0deg')

    const [active, setActive] = useState(false)

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
                    scale.value = withSpring(2, { });

                    rotateX.value = withSpring('360deg')
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
            {children}
        </Animated.View>
    </PanGestureHandler>
  )
}

export default DragDrop