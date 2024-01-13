import { Link } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
    }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 310px auto;
`

export const Btn = styled(Link)`
  background-color: #4cd137;
  color: #fff;
  font-size: 24px;
  border: none;
  border-radius: 15px;
  margin-top: 40px;
  margin-left: 30px;
  width: 230px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  text-decoration: none;
`

export const RedBtn = styled.button`
  background-color: #ff0000;
  color: #fff;
  font-weight: bold;
  padding: 5px 25px;
  border-radius: 10px;
  border: none;
  max-width: 100px;
  width: 100%;
  height: 30px;
  text-align: center;
  margin-left: 10px;
  cursor: pointer;
`

export const GreenBtn = styled.button`
  background-color: #4cd137;
  color: #fff;
  font-weight: bold;
  padding: 5px 30px;
  border-radius: 10px;
  border: none;
  max-width: 100px;
  width: 100%;
  height: 30px;
  text-align: center;
  cursor: pointer;
`

export default GlobalStyle
