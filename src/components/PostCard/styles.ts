import tw from 'tailwind-styled-components'

import { PostCardProps } from '.'

const WrapperModifiers = {
  medium: `
  text-zinc-700
  `,
  large: `
    md:text-white
    `
}

type SizeProps = Pick<PostCardProps, 'size'>
export const Wrapper = tw.article`
    relative
    overflow-hidden
    h-full
    min-h-[342px]
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
    `,
  large: `

        md:absolute
        top-0
        bottom-0
        left-0
        right-0
      `
}
export const CoverOverlay = tw.div`
    ${({ size }: SizeProps) => size && CoverModifier[size]}
    relative
    z-10
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
    px-5
    pb-4
    
    
    ${({ size }: SizeProps) =>
      size === 'medium' ? 'dark:bg-zinc-200/5' : 'md:bg-transparent'}

`

export const MetaCategory = tw.ul`
    text-white
    mb-auto
    ${({ size }: SizeProps) =>
      size === 'medium' ? 'absolute top-2' : 'absolute top-2 md:relative'}
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
    text-2xl
    font-bold
    mt-auto
    mb-5
    line-clamp-2
 
    ${({ size }: SizeProps) =>
      size === 'medium' ? ' text-zinc-700 dark:text-zinc-200' : 'text-zinc-200'}
`

export const Date = tw.span`
    pl-2    
    text-sm
    font-thin

    ${({ size }: SizeProps) =>
      size === 'medium'
        ? '     text-zinc-600/75   dark:text-zinc-400'
        : 'text-zinc-400'}
`

export const Description = tw.span`
    font-thin
    text-sm
    text-zinc-600
    line-clamp-4
    mt-5
    px-2
`
