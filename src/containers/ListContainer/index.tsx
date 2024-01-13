import { useSelector } from 'react-redux'
import Card from '../../components/Card'
import * as S from './styles'
import { RootReducer } from '../../store'

const ListContainer = () => {
  const contacts = useSelector((state: RootReducer) => state.contacts.items)

  return (
    <S.Listcontainer>
      {contacts.map((contact) => (
        <div key={contact.name}>
          <Card
            id={contact.id}
            name={contact.name}
            email={contact.email}
            tel={contact.tel}
          />
        </div>
      ))}
    </S.Listcontainer>
  )
}

export default ListContainer
