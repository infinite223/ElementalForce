import { View, Text, StyleSheet, StyleProp } from 'react-native'
import React, { FC } from 'react'
import { LinearGradient } from 'expo-linear-gradient'

interface GradientProviderProps {
    children: JSX.Element | JSX.Element [],
    elemental: number,
    style?: any
}

const gradients = [
    ['#4c669f', '#3b5998', '#192f6a'],
    ['#8bdf28', '#1b9928', '#5ba928']
]

const GradientProvider:FC<GradientProviderProps> = ({ children, elemental, style }) => {
  return (
    <LinearGradient 
        start={[1, 0]}
        end={[.2, .7]}
        colors={gradients[elemental]} 
        style={[style]}
    >
        {children}
    </LinearGradient>  )
}

export default GradientProvider