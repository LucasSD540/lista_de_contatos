import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index'
import Header from './containers/Header'
import GlobalStyle, { Container } from './styles'
import Home from './pages/Home'
import Add from './pages/Add'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Add />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <Container>
        <RouterProvider router={routes} />
      </Container>
    </Provider>
  )
}

export default App
