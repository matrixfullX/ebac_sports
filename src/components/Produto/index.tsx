<<<<<<< HEAD
import { Produto as ProdutoType } from '../../App'
import * as S from './styles'

type Props = {
  produto: ProdutoType
  aoComprar: (produto: ProdutoType) => void
  favoritar: (produto: ProdutoType) => void
=======
import { useDispatch } from 'react-redux'
import { Produto } from '../../App'
import * as S from './styles'
import { adicionar } from '../../store/reducers/carrinho/carrinho'

type Props = {
  produto: Produto
  favoritar: (produto: Produto) => void
>>>>>>> 6cb719a (save project)
  estaNosFavoritos: boolean
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

<<<<<<< HEAD
const ProdutoComponent = ({
  produto,
  aoComprar,
  favoritar,
  estaNosFavoritos
}: Props) => {
  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
=======
const ProdutoComponent = ({ produto, favoritar, estaNosFavoritos }: Props) => {
  const dispatch = useDispatch()

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} />
      </S.Capa>
      <S.Titulo>{produto.titulo}</S.Titulo>
>>>>>>> 6cb719a (save project)
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => favoritar(produto)} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
<<<<<<< HEAD
      <S.BtnComprar onClick={() => aoComprar(produto)} type="button">
=======
      <S.BtnComprar onClick={() => dispatch(adicionar(produto))} type="button">
>>>>>>> 6cb719a (save project)
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
