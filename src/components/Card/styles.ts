import tw from 'tailwind-styled-components'

import { CardProps } from '.'

const sizeModifiers = {
  medium: `max-w-lg`,
  full: `max-w-screen`
}

const heightModifiers = {
  small: `
    md:h-[15rem]
    h-[15rem]
    md:max-h-[90%]
  `,
  large: `
    md:h-[34.375rem]
    h-[30rem]
  `
}

type SizeProps = Pick<CardProps, 'size'>
type HeightProps = Pick<CardProps, 'height'>

export const Wrapper = tw.div`
    rounded-lg
    w-full
    
    relative
    overflow-hidden
    cursor-pointer
    shadow-md
    
    ${({ size }: SizeProps) => size && sizeModifiers[size]}
    ${({ height }: HeightProps) => height && heightModifiers[height]}
`

export const Mask = tw.div`
    absolute
    top-0
    bottom-0
    left-0
    right-0
    z-0
    bg-gradient-to-r 
    from-[#7928ca]  
    via-[#3B82F6] 
    to-[#ff0080]
`

export const Container = tw.div`
    rounded-md
    absolute
    top-1
    bottom-1
    left-1
    right-1
    bg-center
    bg-cover
    
`

export const Content = tw.div`
    md:p-9
    p-4
    text-white
    w-full
    h-full
    flex
    items-end
    justify-around
    bg-gradient-to-b
    from-transparent
    via-zinc-700/50
    to-zinc-900
    transition-colors
    duration-300
    hover:bg-zinc-900/75
`

export const TypeContainer = tw.div`
    absolute 
    top-1 
    left-2 
    z-10
    bg-zinc-600
    rounded
    px-2
    py-1
    text-sm
    opacity-80
    hover:opacity-100
    transition-opacity
`

export const DescriptionContainer = tw.div`
    w-full
    h-full
    max-h-[70%]
    md:max-h-[40%]
    flex
    gap-4
    flex-col
    md:flex-row
    ${({ height }: HeightProps) => height && heightModifiers[height]}
`

export const Title = tw.h3`
    font-[Merriweather]
    font-bold
    text-3xl
    line-clamp-2

`

export const Subtitle = tw.h4`
    text-sm
    line-clamp-3
    font-thin
`

export const ButtonContainer = tw.div`
    flex
    md:flex-col
    flex-row
    items-center
    justify-center
    gap-5
    group
`

export const Button = tw.button`
    border
    border-white
    rounded-full
    p-2
    transition-colors
    group-hover:bg-white
    group-hover:text-zinc-900

`
