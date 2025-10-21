import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/index'
import { adicionar } from '../store/reducers/carrinho/carrinho'
import { Produto } from '../App'
import ListaProdutos from './listaDeProdutos'

type Props = {
  produtos: Produto[]
  favoritar: (produto: Produto) => void
}

const Produtos = ({ produtos, favoritar }: Props) => {
  const dispatch = useDispatch()
  const favoritos: Produto[] = useSelector(
    (state: RootState) => state.favoritos.itens
  )

  const adicionarAoCarrinho = (produto: Produto) => {
    dispatch(adicionar(produto))
  }

  return (
    <ListaProdutos
      produtos={produtos}
      favoritar={favoritar}
      favoritos={favoritos}
      adicionarAoCarrinho={adicionarAoCarrinho}
    />
  )
}

export default Produtos
