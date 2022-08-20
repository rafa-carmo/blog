import { Play } from 'phosphor-react'

import * as S from './styles'

interface CardProps {
  size?: 'medium' | 'full'
  border?: boolean
  title: string
  subtitle?: string
  background?: string
}

export function Card({
  border,
  title,
  subtitle,
  background,
  size = 'medium'
}: CardProps) {
  return (
    <S.Wrapper size={size}>
      {border && <S.Mask />}
      <S.Container style={{ backgroundImage: `url('${background}')` }}>
        <S.Content>
          <S.DescriptionContainer>
            <div className="flex-[3] flex flex-col gap-4">
              <div>Type</div>
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
