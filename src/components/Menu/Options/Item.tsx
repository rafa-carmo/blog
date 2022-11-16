import { ArrowBendRightDown } from 'phosphor-react'
import React from 'react'

import * as S from './styles'

interface ItemProps {
  label: string
  hasSubItem?: boolean
}

export default function Item({ label, hasSubItem = false }: ItemProps) {
  return (
    <li
      className={`flex relative dark:text-white ${
        hasSubItem && 'mr-5'
      } cursor-pointer
      font-[Merriweather]
      text-lg 
      group
      `}
    >
      {label}

      {hasSubItem && (
        <>
          <div className="absolute bottom-0 right-[-1rem]">
            <ArrowBendRightDown size={15} />
          </div>
          <ul className="absolute hover:opacity-100 hover:flex hover:pointer-events-auto opacity-0 top-9 -right-4 group-hover:opacity-100 group-hover:flex group-hover:pointer-events-auto transition-opacity duration-500 flex-col pointer-events-none">
            <S.LineSubmenu>Categoria 01</S.LineSubmenu>
            <S.LineSubmenu>Categoria 02</S.LineSubmenu>
            <S.LineSubmenu>Categoria 03</S.LineSubmenu>
            <S.LineSubmenu>Categoria 04</S.LineSubmenu>
            <S.LineSubmenu>Categoria 05</S.LineSubmenu>
            <S.LineSubmenu>Categoria Categoria Categoria 06</S.LineSubmenu>
          </ul>
        </>
      )}
    </li>
  )
}
