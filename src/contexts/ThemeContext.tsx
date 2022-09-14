import { createContext, useState, useEffect } from 'react'

type ThemeContextProps = {
  isDark: boolean
  setTheme: (value: boolean) => void
}

export const ThemeContext = createContext({} as ThemeContextProps)

type ThemeProviderProps = {
  children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDark, setIsDark] = useState<boolean>(true)

  useEffect(() => {
    let theme = undefined
    if (typeof window !== 'undefined') {
      theme = localStorage.getItem('theme')
      theme ? theme === 'light' && setIsDark(false) : setIsDark(true)
    }
  }, [])

  function setTheme(theme: boolean) {
    if (typeof window !== 'undefined') {
      setIsDark(!isDark)
      theme
        ? localStorage.setItem('theme', 'dark')
        : localStorage.setItem('theme', 'light')
    }
    return
  }
  return (
    <ThemeContext.Provider value={{ isDark, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
