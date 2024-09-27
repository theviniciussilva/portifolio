import { P } from './styles'

export type Props = {
  children: string
  fontSize?: number
  tipo?: 'principal' | 'secundario'
}

const Paragrafo = ({ fontSize, children, tipo = 'principal' }: Props) => (
  <P fontSize={fontSize} tipo={tipo}>
    {children}
  </P>
)

export default Paragrafo
