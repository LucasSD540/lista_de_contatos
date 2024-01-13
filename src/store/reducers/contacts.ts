import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'

type ContactsState = {
  items: Contact[]
}

const initialState: ContactsState = {
  items: [
    {
      id: 1,
      name: 'Lucas Souza Duarte',
      email: 'abc@email.com',
      tel: '4002-8922'
    }
  ]
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const existentContact = state.items.find(
        (contact) => contact.tel === action.payload.tel
      )

      if (existentContact) {
        alert('Esse contato já existe')
      } else {
        const lastContact = state.items[state.items.length - 1]

        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }
        state.items.push(newContact)
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      )
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const indexContact = state.items.findIndex(
        (contact) => contact.id === action.payload.id
      )

      if (indexContact >= 0) {
        state.items[indexContact] = action.payload
      }
    }
  }
})

export const { add, remove, edit } = contactsSlice.actions

export default contactsSlice.reducer
