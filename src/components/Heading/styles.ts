import tw from 'tailwind-styled-components'

import { HeadingProps } from '.'

const SizeModifiers = {
  small: `
    text-xl
  `,
  medium: `
  text-2xl
  `,
  large: `
  text-4xl
  `
}

type SizeProps = Pick<HeadingProps, 'size'>

export const Wrapper = tw.div`
    text-zinc-700
    dark:text-zinc-200
    font-extrabold
    tracking-wider
    w-fit
    drop-shadow-md
    font-[roboto]
    mb-2
    ${({ size }: SizeProps) => size && SizeModifiers[size]}
    relative
    after:bg-zinc-700
    after:dark:bg-zinc-200
    after:absolute
    after:left-0
    after:-bottom-1
    after:w-1/3
    after:h-1
`
