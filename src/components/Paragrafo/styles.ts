import styled from 'styled-components'
import { Props } from './index'

// Especificando que meu H3 é do tipo props para poder utilizar a propriedade font-size lá no meu TituloEstilo
export const P = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  line-height: 22px;
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
`
