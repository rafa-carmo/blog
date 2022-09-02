import { Footer } from 'components/Footer'
import { Menu } from 'components/Menu'
import { MoonStars, SunDim } from 'phosphor-react'
import { useState } from 'react'

import * as S from './styles'

interface BaseProps {
  children: React.ReactNode
}

export function Base({ children }: BaseProps) {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className={`${isDark ? 'dark' : 'light'}`}>
      <button
        className="fixed z-50 bottom-2 right-2 p-2 text-zinc-800 border border-black bg-zinc-200/50 dark:text-zinc-100 dark:bg-zinc-200/50 transition-all rounded-md opacity-50 hover:opacity-75"
        onClick={() => setIsDark(!isDark)}
      >
        {isDark ? (
          <SunDim size={32} weight="bold" />
        ) : (
          <MoonStars size={32} weight="bold" />
        )}
      </button>
      <S.Wrapper>
        <Menu />
        {children}
      </S.Wrapper>
      <Footer />
    </div>
  )
}
