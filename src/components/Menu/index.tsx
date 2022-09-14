import { Logo } from 'components/Logo'
import Link from 'next/link'
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
      <Link href="/">
        <a className="ml-5 flex-1 max-w-xs flex items-center gap-2 dark:text-white text-zinc-900 font-bold">
          <Logo width={50} height={30} />
          Blog
        </a>
      </Link>
      <nav className="flex-2 hidden lg:block">
        <Options />
      </nav>
      <div className="lg:px-5">
        <SearchBar />
      </div>
    </S.Wrapper>
  )
}
