import { View, Text, StyleSheet, StyleProp } from 'react-native'
import React, { FC } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { elementals, spellCardsType } from '../utils/types'

interface GradientProviderProps {
    children: JSX.Element | JSX.Element [],
    elemental: elementals,
    style?: any,
    cardType: "skill" | "champ" | "elemental" | "background"
}

const gradients = [
    {
        name: 'wind',
        gradients: ['#114411', '#246748', '#5b9938'],
        background: ['#113311', '#244748', '#5b64938'],
    },
    {
        name: 'water',
        gradients: ['#3b3968', '#192f5a', '#2c466f'],
        background: ['#1c364f', '#111128', '#192f4a'], 
    },
    {
        name: 'fire',
        gradients: ['#511', '#5f1316', '#af2121'],
        background: ['#411', '#4f2121', '#3f1316'],
    },
    {
        name: 'darkus',
        gradients: ['#231512', '#221224', '#321237'],
        background:['#131012', '#151219', '#121215'],
    }
]

const backCard = ['#010102', '#191111', '#261211']

const GradientProvider:FC<GradientProviderProps> = ({ children, elemental, style, cardType }) => {
    const findGradeint = gradients.find((gradient) => gradient.name === elemental)

    return (
    <LinearGradient 
        start={[1, 0]}
        end={[.2, .7]}
        colors={findGradeint?(cardType==="background"?findGradeint.background:findGradeint.gradients):backCard} 
        style={[style, {opacity: cardType === 'champ'?.5:cardType==='elemental'?1:1}]}
    >
        {children}
    </LinearGradient>  )
}

export default GradientProvider