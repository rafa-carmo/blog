import tw from 'tailwind-styled-components'

import { PostCardProps } from '.'

const WrapperModifiers = {
  medium: `
  text-zinc-700
  `,
  large: `
  text-white
    `
}

type SizeProps = Pick<PostCardProps, 'size'>
export const Wrapper = tw.article`
    relative
    overflow-hidden
    h-[342px]
    w-full
    group
    ${({ size }: SizeProps) => size && WrapperModifiers[size]}
    
`

export const Container = tw.div`
    relative
    h-full
    flex
    flex-col

`

const CoverModifier = {
  medium: `
        relative
    `,
  large: `
        absolute
        top-0
        bottom-0
        left-0
        right-0
      `
}
export const CoverOverlay = tw.div`
    ${({ size }: SizeProps) => size && CoverModifier[size]}
    z-0
    
    after:absolute
    after:top-0
    after:bottom-0
    after:left-0
    after:right-0
    after:z-0
    after:bg-zinc-800/25
    after:group-hover:bg-zinc-800/50
    after:transition-colors
    after:duration-300
`
export const Content = tw.div`
    flex
    flex-col
    justify-end
    z-20
    w-full
    h-full
    p-5
    ${({ size }: SizeProps) => size === 'medium' && 'bg-white'}

`

export const MetaCategory = tw.ul`
    text-white
    mb-auto
    ${({ size }: SizeProps) => size === 'medium' && 'absolute     top-2'}
`

export const Category = tw.li`
    w-fit
    bg-zinc-600
    rounded
    px-2
    py-1
    text-sm
    opacity-80
    hover:opacity-100
    transition-opacity
`

export const Title = tw.h2`
    relative
    text-3xl
    font-bold
    mb-5
    line-clamp-2
`

export const Date = tw.span`
    pl-2    
    text-sm
    font-thin
`
