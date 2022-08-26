import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import Image from 'next/image'

import * as S from './styles'

type ImageProps = {
  url: string
  alt: string
  width?: string | number
  height?: string | number
}

export interface PostCardProps {
  size?: 'medium' | 'large'
  category: string
  title: string
  createdAt: Date
  background: ImageProps
}

export function PostCard({
  category,
  size = 'medium',
  title,
  createdAt,
  background
}: PostCardProps) {
  const avaliableDateFormat = format(createdAt, "d' de 'MMMM' de 'yyyy'", {
    locale: ptBR
  })
  return (
    <S.Wrapper size={size}>
      <S.Container>
        <S.CoverOverlay size={size}>
          <Image
            width={560}
            height={342}
            alt={background.alt}
            src={background.url}
          />
        </S.CoverOverlay>
        <S.Content size={size}>
          <S.MetaCategory size={size}>
            <S.Category>{category}</S.Category>
          </S.MetaCategory>
          <S.Title>{title}</S.Title>
          <S.Date>
            <time />
            {avaliableDateFormat}
          </S.Date>
        </S.Content>
      </S.Container>
    </S.Wrapper>
  )
}
