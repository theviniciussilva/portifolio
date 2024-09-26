import styled from 'styled-components'
import { Props } from './index'

// Especificando que meu H3 é do tipo props para poder utilizar a propriedade font-size lá no meu TituloEstilo
export const Titulo = styled.h3<Props>`
  color: #282a35;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
`
