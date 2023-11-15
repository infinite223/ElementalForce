import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
interface GradientProviderProps {
    children: JSX.Element | JSX.Element [],
    elemental: number
}

const gradients = [
    ['#4c669f', '#3b5998', '#192f6a'],
    ['#4b9f28', '#1b9928', '#1b7928']
]

const GradientProvider:FC<GradientProviderProps> = ({ children, elemental }) => {
  return (
    <LinearGradient colors={gradients[elemental]} style={{}}>
        {children}
    </LinearGradient>  )
}

export default GradientProvider