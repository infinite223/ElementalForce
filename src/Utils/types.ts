export enum SpellCardsValues {
    Block = "block",
    Atack = "atack",
}

export enum ElementalsValues {
    Elemental_1 = "darkus",
    Elemental_2 = "water",
    Elemental_3 = "fire",
    Elemental_4 = "wind",
}

export type spellCardsType = SpellCardsValues
export type elementals = ElementalsValues
export type elementalParamsType = {
    name: elementals,
    power: number,
    type: spellCardsType
}

export type passiveTypes = 
    "powerUp" |
    "";

export type Card = {
    name: string,
    desc: string,
    elementalParams: elementalParamsType[]
}

export type champ = {
    name: string,
    desc: string, 
    element: elementals,
    params: {
        power: number,
        block: number,
        passive: passiveTypes
    }
}