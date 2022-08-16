import { ArrowBendRightDown } from 'phosphor-react'
import React from 'react'

interface ItemProps {
  label: string
  hasSubItem?: boolean
}

export default function Item({ label, hasSubItem = false }: ItemProps) {
  return (
    <div
      className={`flex relative text-white ${
        hasSubItem && 'mr-5'
      } cursor-pointer
      font-[Merriweather]
      `}
    >
      {label}

      {hasSubItem && (
        <div className="absolute bottom-0 right-[-1rem]">
          <ArrowBendRightDown size={15} />
        </div>
      )}
    </div>
  )
}
