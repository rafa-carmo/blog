import { Menu } from 'components/Menu'

import * as S from './styles'

interface BaseProps {
  children: React.ReactNode
}

export function Base({ children }: BaseProps) {
  return (
    <S.Wrapper>
      <Menu />
      {children}
    </S.Wrapper>
  )
}
