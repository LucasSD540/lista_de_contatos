import { useState } from 'react'
import FormContainer from '../../containers/Form'
import Sidebar from '../../containers/Sidebar'

const Add = () => {
  const [showBtnNew] = useState(false)

  return (
    <>
      <Sidebar showBtnNew={showBtnNew} />
      <FormContainer />
    </>
  )
}

export default Add
