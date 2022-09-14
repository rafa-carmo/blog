import { Footer } from 'components/Footer'
import { Menu } from 'components/Menu'
import { ThemeContext } from 'contexts/ThemeContext'
import NextNProgress from 'nextjs-progressbar'
import { MoonStars, SunDim } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'

import * as S from './styles'

interface BaseProps {
  children: React.ReactNode
}

export function Base({ children }: BaseProps) {
  const { isDark, setTheme } = useContext(ThemeContext)

  function handleChangeTheme() {
    setTheme(!isDark)
  }

  return (
    <div className={`${isDark ? 'dark' : 'light'}`}>
      <NextNProgress
        color={isDark ? 'white' : 'black'}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />

      <button
        className="fixed z-50 bottom-2 right-2 p-2 text-zinc-800 border border-black bg-zinc-200/50 dark:text-zinc-100 dark:bg-zinc-200/50 transition-all rounded-md opacity-50 hover:opacity-75"
        onClick={handleChangeTheme}
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
        <Footer />
      </S.Wrapper>
    </div>
  )
}
