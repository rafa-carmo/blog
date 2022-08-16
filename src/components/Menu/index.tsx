import { Logo } from 'components/Logo'

import { Options } from './Options/Options'
import { SearchBar } from './SearchBar'
import * as S from './styles'

export function Menu() {
  return (
    <S.Wrapper>
      <div className="ml-5 flex-1 max-w-xs flex items-center gap-2 text-white">
        <Logo width={50} height={30} />
        Blog
      </div>
      <div className="flex-1">
        <Options />
      </div>
      <div className="pr-5">
        <SearchBar />
      </div>
    </S.Wrapper>
  )
}
