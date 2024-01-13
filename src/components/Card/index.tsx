import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import ContactClass from '../../models/Contact'

import DeleteBtn from '../DeleteBtn'

import * as S from './styles'
import { GreenBtn, RedBtn } from '../../styles'
import { edit } from '../../store/reducers/contacts'

type Props = ContactClass

const Card = ({
  name: originalName,
  email: originalEmail,
  tel: originalTel,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')

  useEffect(() => {
    if (originalName.length > 0) {
      setName(originalName)
    }
  }, [originalName])

  useEffect(() => {
    if (originalEmail.length > 0) {
      setEmail(originalEmail)
    }
  }, [originalEmail])

  useEffect(() => {
    if (originalTel.length > 0) {
      setTel(originalTel)
    }
  }, [originalTel])

  function cancelEditing() {
    setEditing(false)
    setName(originalName)
    setEmail(originalEmail)
    setTel(originalTel)
  }

  return (
    <S.Card>
      {editing ? (
        <S.EditDiv>
          <S.EditInput
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <S.EditInput
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <S.EditInput
            type="text"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
        </S.EditDiv>
      ) : (
        <>
          <S.Title>{name}</S.Title>
          <S.Email>{email}</S.Email>
          <S.Number>{tel}</S.Number>
        </>
      )}
      <S.Buttons>
        {editing ? (
          <>
            <GreenBtn
              onClick={() => {
                dispatch(
                  edit({
                    id,
                    name,
                    email,
                    tel
                  })
                )
                setEditing(false)
              }}
            >
              Salvar
            </GreenBtn>
            <RedBtn onClick={cancelEditing}>Cancelar</RedBtn>
          </>
        ) : (
          <>
            <GreenBtn onClick={() => setEditing(true)}>Editar</GreenBtn>
            <DeleteBtn contactId={id} />
          </>
        )}
      </S.Buttons>
    </S.Card>
  )
}

export default Card
