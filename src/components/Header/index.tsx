import * as S from './styles'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

const Header = () => {
  // Pega itens do carrinho e favoritos diretamente do Redux
  const itensNoCarrinho = useSelector(
    (state: RootState) => state.carrinho.itens
  )
  const favoritos = useSelector((state: RootState) => state.favoritos.itens)

  // Calcula o valor total do carrinho
  const valorTotal = itensNoCarrinho.reduce((acc, item) => acc + item.preco, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} alt="cesta de compras" />
        <span>
          {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
