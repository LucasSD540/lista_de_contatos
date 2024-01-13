import { Btn } from '../../styles'
import * as S from './styles'

const ReturnBtn = () => (
  <Btn to="/">
    <S.ReturnIcon>
      <img
        src={process.env.PUBLIC_URL + '/assets/ReturnIcon.png'}
        alt="Return Icon"
      />
    </S.ReturnIcon>{' '}
    <p>Voltar</p>
  </Btn>
)

export default ReturnBtn
