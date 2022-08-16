import tw from 'tailwind-styled-components'

export const Wrapper = tw.form`
    w-fit
    flex
    gap-2
`
export const Input = tw.input`
    min-w-[304px]
    w-full
    text-sm
    bg-transparent
    border-b
    text-zinc-400/25
    border-b-zinc-400/25
    focus:text-zinc-200
    focus:border-b-zinc-200
    transition-colors
    outline-none
    pl-2
    pb-1
`
