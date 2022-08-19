import { FacebookLogo, InstagramLogo } from 'phosphor-react'

import * as S from './styles'

export function SearchBar() {
  return (
    <S.Wrapper>
      <div>
        <S.Input placeholder="Search" />
      </div>
      <div className="hidden md:flex ">
        <InstagramLogo
          size={25}
          weight="fill"
          className="text-zinc-700 hover:text-zinc-500 dark:text-zinc-300/50 dark:hover:text-zinc-300 transition-colors"
        />
        <FacebookLogo
          size={25}
          weight="fill"
          className="text-zinc-700 hover:text-zinc-500 dark:text-zinc-300/50 dark:hover:text-zinc-300 transition-colors"
        />
      </div>
    </S.Wrapper>
  )
}
