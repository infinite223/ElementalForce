type spellCardsType = "block" | "atack"
type elementals = "darkus" | "water" | "fire" | "wind"

export type Card = {
    name: string,
    desc: string,
    type: spellCardsType,
    elementalParams: {
        water: number,
        fire: number,
        wind: number,
        darkus: number
    }
}
export const basicCards: Card[] = [
    {
        name: 'Magic wall',
        desc: "Postać tworzy barierę",
        type: 'block',
        elementalParams: {
            water: 35,
            fire: 55,
            wind: 90,
            darkus: 12
        }
    },
    {
        name: 'Water Ball',
        desc: "Postać wytwarza pocisk wodny",
        type: 'block',
        elementalParams: {
            water: 95,
            fire: 0,
            wind: 40,
            darkus: 10
        }
    }
]