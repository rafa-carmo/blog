import { FacebookLogo, InstagramLogo } from 'phosphor-react'

import * as S from './styles'

export function SearchBar() {
  return (
    <S.Wrapper>
      <S.Input placeholder="Search" />
      <div className="flex">
        <InstagramLogo
          size={25}
          weight="fill"
          className="text-zinc-300/50 hover:text-zinc-300 transition-colors"
        />
        <FacebookLogo
          size={25}
          weight="fill"
          className="text-zinc-300/50 hover:text-zinc-300 transition-colors"
        />
      </div>
    </S.Wrapper>
  )
}
