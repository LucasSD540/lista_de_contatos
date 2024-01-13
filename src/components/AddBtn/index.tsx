import * as S from './styles'
import { Btn } from '../../styles/index'

const AddBtn = () => (
  <Btn to="/novo">
    <S.PlusIcon>+</S.PlusIcon> <p>Novo contato</p>
  </Btn>
)

export default AddBtn
