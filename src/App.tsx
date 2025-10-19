<<<<<<< HEAD
import { useEffect, useState } from 'react'
=======
import { useState } from 'react'
>>>>>>> 6cb719a (save project)
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
<<<<<<< HEAD

export type Produto = {
  id: number
  nome: string
=======
import { RootReducer } from './store'
import { useSelector } from 'react-redux'
import { useGetProdutosQuery } from './services/api'

export type Produto = {
  id: number
  titulo: string
>>>>>>> 6cb719a (save project)
  preco: number
  imagem: string
}

function App() {
<<<<<<< HEAD
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [carrinho, setCarrinho] = useState<Produto[]>([])
  const [favoritos, setFavoritos] = useState<Produto[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => setProdutos(res))
  }, [])

  function adicionarAoCarrinho(produto: Produto) {
    if (carrinho.find((p) => p.id === produto.id)) {
      alert('Item já adicionado')
    } else {
      setCarrinho([...carrinho, produto])
    }
  }
=======
  const { data: produtos, isLoading } = useGetProdutosQuery()
  const itens = useSelector((state: RootReducer) => state.carrinho.itens)
  const [favoritos, setFavoritos] = useState<Produto[]>([])

  if (isLoading) return <h2>Carregando ...</h2>
>>>>>>> 6cb719a (save project)

  function favoritar(produto: Produto) {
    if (favoritos.find((p) => p.id === produto.id)) {
      const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
      setFavoritos(favoritosSemProduto)
    } else {
      setFavoritos([...favoritos, produto])
    }
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
<<<<<<< HEAD
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={favoritar}
          adicionarAoCarrinho={adicionarAoCarrinho}
=======
        <Header favoritos={favoritos} itensNoCarrinho={itens} />
        <Produtos
          produtos={produtos ?? []}
          favoritos={favoritos}
          favoritar={favoritar}
>>>>>>> 6cb719a (save project)
        />
      </div>
    </>
  )
}

export default App
