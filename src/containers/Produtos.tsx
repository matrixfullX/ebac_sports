<<<<<<< HEAD
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
=======
import { Produto as ProdutoTypes } from '../App'
import { Produto } from '../App'
import ProdutoComponent from '../components/Produto'
>>>>>>> 6cb719a (save project)

import * as S from './styles'

type Props = {
<<<<<<< HEAD
  produtos: ProdutoType[]
  favoritos: ProdutoType[]
  adicionarAoCarrinho: (produto: ProdutoType) => void
  favoritar: (produto: ProdutoType) => void
}

const ProdutosComponent = ({
  produtos,
  favoritos,
  adicionarAoCarrinho,
  favoritar
}: Props) => {
  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
=======
  produtos: ProdutoTypes[]
  favoritos: ProdutoTypes[]
  favoritar: (produto: ProdutoTypes) => void
}

const ProdutosComponent = ({ produtos, favoritos, favoritar }: Props) => {
  const produtoEstaNosFavoritos = (produto: ProdutoTypes) => {
>>>>>>> 6cb719a (save project)
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <>
      <S.Produtos>
<<<<<<< HEAD
        {produtos.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
            favoritar={favoritar}
            aoComprar={adicionarAoCarrinho}
=======
        {produtos.map((game: Produto) => (
          <ProdutoComponent
            key={game.id}
            produto={game}
            favoritar={favoritar}
            estaNosFavoritos={produtoEstaNosFavoritos(game)}
>>>>>>> 6cb719a (save project)
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
