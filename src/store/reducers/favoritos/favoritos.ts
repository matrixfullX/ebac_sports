import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarFavorito: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const jaExiste = state.itens.find((p) => p.id === produto.id)
      if (!jaExiste) {
        state.itens.push(produto)
      }
    },
    removerFavorito: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((p) => p.id !== action.payload)
    }
  }
})

export const { adicionarFavorito, removerFavorito } = favoritosSlice.actions
export default favoritosSlice.reducer
