import * as S from './styles'

interface HeadingProps {
  text: string
  size?: 'small' | 'medium' | 'large'
}

export function Heading({ text, size = 'medium' }: HeadingProps) {
  return <S.Wrapper size={size}>{text}</S.Wrapper>
}
