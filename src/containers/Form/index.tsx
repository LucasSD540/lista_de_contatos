import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { add } from '../../store/reducers/contacts'

import * as S from './styles'
import { FormEvent, useState } from 'react'

const FormContainer = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')

  const addContact = (e: FormEvent) => {
    e.preventDefault()

    dispatch(
      add({
        name,
        email,
        tel
      })
    )
    navigate('/')
  }

  return (
    <S.FormDiv onSubmit={addContact}>
      <S.FormTitle>Adicionar novo contato</S.FormTitle>
      <S.FormInput
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Nome completo do contato"
      />
      <S.FormInput
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Email"
      />
      <S.FormInput
        value={tel}
        onChange={(e) => setTel(e.target.value)}
        type="text"
        placeholder="Telefone"
      />
      <S.AddBtnContact type="submit">Adicionar</S.AddBtnContact>
    </S.FormDiv>
  )
}

export default FormContainer
