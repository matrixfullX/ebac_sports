import Header from './components/Header'
import Produtos from './containers/Produtos'
import {
  adicionarFavorito,
  removerFavorito
} from './store/reducers/favoritos/favoritos'
import { RootState, AppDispatch } from './store'
import { useSelector, useDispatch } from 'react-redux'
import { useGetProdutosQuery } from './services/api'
import { GlobalStyle } from './styles'
import produtosMock from './data/produtosMock'

export type Produto = {
  nome: string
  id: number
  titulo?: string
  preco: number
  imagem: string
}

function App() {
  const dispatch = useDispatch<AppDispatch>()
  const { data: produtosApi, isLoading, error } = useGetProdutosQuery()
  const favoritos = useSelector((state: RootState) => state.favoritos.itens)

  // Se o servidor estiver offline, usa o mock
  const produtos = error || !produtosApi ? produtosMock : produtosApi

  function favoritar(produto: Produto) {
    if (favoritos.find((p) => p.id === produto.id)) {
      dispatch(removerFavorito(produto.id))
    } else {
      dispatch(adicionarFavorito(produto))
    }
  }

  if (isLoading) return <h2>Carregando ...</h2>

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos produtos={produtos} favoritar={favoritar} />
      </div>
    </>
  )
}

export default App
