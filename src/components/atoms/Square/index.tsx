import * as S from './styles'
import { SquareProps } from './types'

const Square = ({ ...props }: SquareProps) => {
  return <S.Box {...props} />
}

export default Square
