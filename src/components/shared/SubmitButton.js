import styled from 'styled-components'
import Button from 'react-bootstrap/Button'

const SubmitButton = styled(Button)`
background: #84745D;
color: #FFF;
outline: none;
border-style: none;
box-shadow: none;
&:focus, &:hover, &:active {
  outline: none;
  border-style: none;
  background: #84745D;
  color: #FFF;
}
`

export default SubmitButton
