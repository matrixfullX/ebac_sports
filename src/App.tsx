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

export type Produto = {
  nome: string
  id: number
  titulo: string
  preco: number
  imagem: string
}

function App() {
  const dispatch = useDispatch<AppDispatch>()
  const { data: produtos, isLoading } = useGetProdutosQuery()
  const favoritos = useSelector((state: RootState) => state.favoritos.itens)

  if (isLoading) return <h2>Carregando ...</h2>

  function favoritar(produto: Produto) {
    if (favoritos.find((p) => p.id === produto.id)) {
      dispatch(removerFavorito(produto.id))
    } else {
      dispatch(adicionarFavorito(produto))
    }
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos produtos={produtos ?? []} favoritar={favoritar} />
      </div>
    </>
  )
}

export default App
