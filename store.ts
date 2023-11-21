import { configureStore } from "@reduxjs/toolkit";
import gameStateSlice from './src/slices/gameStateSlice'

export const store = configureStore({
    reducer: {
        gameState: gameStateSlice
    }
})