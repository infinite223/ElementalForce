import { View, Text, StyleSheet, StyleProp } from 'react-native'
import React, { FC } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { elementals, spellCardsType } from '../utils/data'

interface GradientProviderProps {
    children: JSX.Element | JSX.Element [],
    elemental: {name: elementals, power: number, type: spellCardsType},
    style?: any,
    cardType: "skill" | "champ" | "elemental"
}

const gradients = [
    {
        name: 'wind',
        gradients: ['#114411', '#246748', '#5b9938']
    },
    {
        name: 'water',
        gradients:  ['#4c669f', '#3b5998', '#192f6a'],
    },
    {
        name: 'fire',
        gradients: ['#511', '#9f4346', '#ff2121'],
    },
    {
        name: 'darkus',
        gradients: ['#231512', '#321234', '#521249'],
    }
]

const backCard = ['#010102', '#191111', '#261211']

const GradientProvider:FC<GradientProviderProps> = ({ children, elemental, style, cardType }) => {
    const findGradeint = gradients.find((gradient) => gradient.name === elemental.name)

    return (
    <LinearGradient 
        start={[1, 0]}
        end={[.2, .7]}
        colors={findGradeint?findGradeint.gradients:backCard} 
        style={[style, {opacity: cardType === 'champ'?.5:cardType==='elemental'?1:1}]}
    >
        {children}
    </LinearGradient>  )
}

export default GradientProvider