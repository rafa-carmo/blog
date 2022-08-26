import { Logo } from 'components/Logo'
import { useEffect, useState } from 'react'

import { Options } from './Options'
import { SearchBar } from './SearchBar'
import * as S from './styles'

export function Menu() {
  const [backgroundTransparent, setBackgroundTransparent] = useState(true)

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY >= 100) {
        setBackgroundTransparent(false)
      } else {
        setBackgroundTransparent(true)
      }
    })
  }, [backgroundTransparent])
  return (
    <S.Wrapper
      className={`${
        backgroundTransparent
          ? 'bg-zinc-300/50 dark:bg-transparent'
          : 'bg-zinc-100 dark:bg-zinc-900 border-zinc-900 dark:border-white'
      }`}
    >
      <div className="ml-5 flex-1 max-w-xs flex items-center gap-2 text-white">
        <Logo width={50} height={30} />
        Blog
      </div>
      <nav className="flex-1 hidden md:block">
        <Options />
      </nav>
      <div className="pr-5">
        <SearchBar />
      </div>
    </S.Wrapper>
  )
}
