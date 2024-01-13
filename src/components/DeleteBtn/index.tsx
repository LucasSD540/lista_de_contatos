import { DelBtn } from './styles'

import { remove } from '../../store/reducers/contacts'
import { useDispatch } from 'react-redux'

type Props = {
  contactId: number
}

const DeleteBtn = ({ contactId }: Props) => {
  const dispatch = useDispatch()

  const deleteContact = () => {
    dispatch(remove(contactId))
  }

  return <DelBtn onClick={deleteContact}>Excluir</DelBtn>
}

export default DeleteBtn
