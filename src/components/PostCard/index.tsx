import Image from 'next/image'
import Link from 'next/link'
import { dateFormat } from 'utils/dateFormat'

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
  description?: string
  createdAt: Date | string
  background: ImageProps
}

export function PostCard({
  category,
  size = 'medium',
  title,
  description,
  createdAt,
  background
}: PostCardProps) {
  return (
    <S.Wrapper size={size}>
      <S.Container>
        <S.CoverOverlay size={size}>
          <Image
            width={560}
            height={342}
            alt={background.alt}
            src={background.url}
            layout="responsive"
          />
        </S.CoverOverlay>
        <S.Content size={size}>
          <S.MetaCategory size={size}>
            <S.Category>{category}</S.Category>
          </S.MetaCategory>
          <Link href={`${category}/${title}`}>
            <a>
              <S.Title size={size}>{title}</S.Title>
            </a>
          </Link>
          <S.Date size={size}>
            <time dateTime={dateFormat({ date: createdAt, type: 'seo' })}>
              {dateFormat({ date: createdAt })}
            </time>
          </S.Date>
          {description && <S.Description>{description}</S.Description>}
        </S.Content>
      </S.Container>
    </S.Wrapper>
  )
}
