import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

export const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const prod = action.payload

      if (state.itens.find((game) => game.id === prod.id)) {
        alert('Item Já Adicionado')
      } else {
        state.itens.push(prod)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
