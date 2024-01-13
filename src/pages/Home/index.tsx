import { useState } from 'react'
import ListContainer from '../../containers/ListContainer'
import Sidebar from '../../containers/Sidebar'

const Home = () => {
  const [showBtnNew] = useState(true)

  return (
    <>
      <Sidebar showBtnNew={showBtnNew} />
      <ListContainer />
    </>
  )
}

export default Home
