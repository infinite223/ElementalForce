export type spellCardsType = "block" | "atack"
export type elementals = "darkus" | "water" | "fire" | "wind"
export type elementalParamsType = {
    name: elementals,
    power: number,
    type: spellCardsType
}

export type Card = {
    name: string,
    desc: string,
    elementalParams: elementalParamsType[]
    
}
export const basicCards: Card[] = [
    {
        name: 'Magic wall',
        desc: "Postać tworzy barierę",
        elementalParams: [
            {
                name: 'water',
                power: 32,
                type: 'block'
            },
            {
                name: 'wind',
                power: 62,
                type: 'block'
            },
            {
                name: 'darkus',
                power: 42,
                type: 'block'
            },
            {
                name: 'fire',
                power: 22,
                type: 'block'
            },
        ]
    },
    {
        name: 'Fire ball',
        desc: "Postać tworzy barierę",
        elementalParams: [
            {
                name: 'water',
                power: 12,
                type: 'atack'
            },
            {
                name: 'wind',
                power: 22,
                type: 'atack'
            },
            {
                name: 'darkus',
                power: 25,
                type: 'atack'
            },
            {
                name: 'fire',
                power: 72,
                type: 'atack'
            },
        ]
    },
    {
        name: 'Shadow atack',
        desc: "Postać tworzy barierę",
        elementalParams: [
            {
                name: 'water',
                power: 12,
                type: 'atack'
            },
            {
                name: 'wind',
                power: 52,
                type: 'atack'
            },
            {
                name: 'darkus',
                power: 95,
                type: 'atack'
            },
            {
                name: 'fire',
                power: 12,
                type: 'atack'
            },
        ]
    },
    {
        name: 'Shadow atack',
        desc: "Postać tworzy barierę",
        elementalParams: [
            {
                name: 'water',
                power: 12,
                type: 'atack'
            },
            {
                name: 'wind',
                power: 52,
                type: 'atack'
            },
            {
                name: 'darkus',
                power: 195,
                type: 'atack'
            },
            {
                name: 'fire',
                power: 12,
                type: 'atack'
            },
        ]
    },
]