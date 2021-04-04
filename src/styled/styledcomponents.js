import styled from 'styled-components'
import { InputBase } from '@material-ui/core'

export const NetflixInput = styled(InputBase)`
  z-index: 30;
  background-color: #fff;
  padding: 25.5px;
  height: 30px;
  border-radius: 5px 0px 0px 5px;
  border: none;
;`

const handleWidth = wide => {
  switch(wide){
    case 'fullWidth': return '100%'
    case 'medium': return '260px'
    default: return '160px'
  }
}

const handleRadius = radius => {
  switch(radius){
    case 'loginInput': return '0px 5px 5px 0px'
    case '5px': return '5px'
    default: return '0px'
  }
}

export const NetflixButton = styled.button`
  z-index: 15;
  background-color: ${props => props.color === 'gray' ? 'lightgray' : 'red'};
  color: #fff;
  border-radius: ${({radius}) => handleRadius(radius)};
  text-transform: inherit;
  padding: 15px;
  font-size: 1.1rem;
  border: none;
  outline: none;
  cursor: pointer;
  width: ${({wide}) => handleWidth(wide)};
`