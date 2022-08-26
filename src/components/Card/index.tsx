import { Play } from 'phosphor-react'

import * as S from './styles'

export interface CardProps {
  size?: 'medium' | 'full'
  border?: boolean
  title: string
  type?: string
  subtitle?: string
  background?: string
  height?: 'small' | 'large'
}

export function Card({
  border,
  title,
  type,
  subtitle,
  background,
  size = 'medium',
  height = 'large'
}: CardProps) {
  return (
    <S.Wrapper size={size} height={height}>
      {border && <S.Mask />}
      <S.Container style={{ backgroundImage: `url('${background}')` }}>
        <S.Content>
          <S.TypeContainer>{type}</S.TypeContainer>
          <S.DescriptionContainer height={height}>
            <div className="flex-[3] flex flex-col gap-4">
              <S.Title>{title}</S.Title>
              <S.Subtitle>{subtitle}</S.Subtitle>
            </div>
            <div className="h-full md:border-r md:border-b-0 border-b border-white/50"></div>
            <S.ButtonContainer>
              Ler mais
              <S.Button>
                <Play size={32} weight="bold" />
              </S.Button>
            </S.ButtonContainer>
          </S.DescriptionContainer>
        </S.Content>
      </S.Container>
    </S.Wrapper>
  )
}
