import * as S from './styles'
import { Produto as ProdutoType } from '../../App'

type Props = {
  produto: ProdutoType
  favoritar: (produto: ProdutoType) => void
  estaNosFavoritos: boolean
  adicionarAoCarrinho: (produto: ProdutoType) => void
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const Produto = ({
  produto,
  favoritar,
  estaNosFavoritos,
  adicionarAoCarrinho
}: Props) => {
  return (
    <>
      <S.Produto>
        <S.Capa>
          <img src={produto.imagem} />
        </S.Capa>
        <S.Titulo>{produto.titulo}</S.Titulo>
        <S.Prices>
          <strong>{paraReal(produto.preco)}</strong>
        </S.Prices>
        <S.BtnComprar onClick={() => favoritar(produto)} type="button">
          {estaNosFavoritos
            ? '- Remover dos favoritos'
            : '+ Adicionar aos favoritos'}
        </S.BtnComprar>
        <S.BtnComprar
          onClick={() => adicionarAoCarrinho(produto)}
          type="button"
        >
          Adicionar ao carrinho
        </S.BtnComprar>
      </S.Produto>
    </>
  )
}

export default Produto
