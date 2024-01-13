import AddBtn from '../../components/AddBtn'
import ReturnBtn from '../../components/ReturnBtn'
import * as S from './styles'

const Sidebar = ({ showBtnNew }: { showBtnNew: boolean }) => {
  return (
    <S.SidebarContainer>
      {showBtnNew ? <AddBtn /> : <ReturnBtn />}
    </S.SidebarContainer>
  )
}

export default Sidebar
