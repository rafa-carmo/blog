import tw from 'tailwind-styled-components'

export const Wrapper = tw.main`

`
export const HeaderContainer = tw.div`
    border-b
    dark:border-white/50
    border-zinc-900/50
    p-7
`

export const Header = tw.div`
    mb-4
`

export const Title = tw.h1`
    dark:text-white 
    text-zinc-700 
    font-extrabold 
    font-[Merriweather] 
    text-5xl 
    md:mt-32 
    relative 
    z-1
`

export const Subtitle = tw.h2`
    dark:text-white 
    text-zinc-700 
    font-extrabold 
    font-[Merriweather] 
    text-lg 
    md:mt-8 
    pl-3 
    relative 
    z-1
`

export const NewsletterContainer = tw.div`
    max-w-md 
    relative
`

export const NewsletterInput = tw.input`
    w-full 
    px-2 
    py-4 
    rounded-md 
    outline-none
`
