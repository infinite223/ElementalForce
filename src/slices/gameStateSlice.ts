import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gameState: []
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