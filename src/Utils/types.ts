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

export enum PassiveValues {
    Passive_1 = "powerUp",
}

export type spellCardsType = SpellCardsValues
export type elementals = ElementalsValues
export type elementalParamsType = {
    name: elementals,
    power: number,
    type: spellCardsType
}

export type passiveTypes = PassiveValues

export type Card = {
    id: number,
    name: string,
    desc: string,
    elementalParams: elementalParamsType[]
}

export type Champ = {
    id: number,
    name: string,
    desc: string, 
    element: elementals,
        power: number,
        block: number,
        passive: passiveTypes
}

export type User = {
    id: string,
    name: string, 
    champ: Champ,
    card?: Card | null
    // ...
}

export type gameState = {
     id: string,
     card_1_id: number,
     card_2_id: number,
     champ_1_id: number,
     champ_2_id: number,
}
