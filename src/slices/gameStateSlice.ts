import { createSlice } from "@reduxjs/toolkit";

const gameState = null
//  {
//   id: "1",
//   card_1_id: 1,
//   card_2_id: 2,
//   champ_1_id: 1,
//   champ_2_id: 2,
// } 

const initialState = {
  gameState: gameState
}

export const gameStateSlice = createSlice({
    name: 'gameState',
    initialState,
    reducers: {
      setGameState: (state, action) => {
            state.gameState = action.payload
        }
    }
})

export const { setGameState } = gameStateSlice.actions
export const selectGameState = (state: any) => state.gameState

export default gameStateSlice.reducer;