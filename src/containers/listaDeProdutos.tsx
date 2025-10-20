import * as S from './styles'
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'

type Props = {
  produtos: ProdutoType[]
  favoritar: (produto: ProdutoType) => void
  favoritos: ProdutoType[]
  adicionarAoCarrinho: (produto: ProdutoType) => void
}

const ListaProdutos = ({
  produtos,
  favoritar,
  favoritos,
  adicionarAoCarrinho
}: Props) => {
  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}
          favoritar={favoritar}
          estaNosFavoritos={favoritos.some((p) => p.id === produto.id)}
          adicionarAoCarrinho={adicionarAoCarrinho}
        />
      ))}
    </S.Produtos>
  )
}

export default ListaProdutos
