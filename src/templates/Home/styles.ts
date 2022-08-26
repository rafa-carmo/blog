import tw from 'tailwind-styled-components'

export const Wrapper = tw.main`

`
export const HeaderContainer = tw.div`
    border-b

    p-7
    min-h-[25rem]
    mb-8
    
`

export const Header = tw.div`
    mb-4
    pb-10

`

export const Title = tw.h1`
    dark:text-white
    text-zinc-700 
    font-extrabold 
    font-[Merriweather] 
    md:text-5xl 
    text-2xl
    mt-32 
    relative 
    z-1

    flex-1  
`

export const Subtitle = tw.h2`
    dark:text-white 
    text-zinc-700 
    md:font-extrabold 
    font-light
    font-[Merriweather] 
    
    md:text-lg 
    text-base
    md:mt-8 
    mt-3
    pl-3 
    relative 
    z-1
    flex-1
    
`

export const NewsletterContainer = tw.div`
    max-w-md 
    relative
    mb-10
`

export const NewsletterInput = tw.input`
    w-full 
    px-2 
    py-4 
    rounded-md 
    outline-none
`
