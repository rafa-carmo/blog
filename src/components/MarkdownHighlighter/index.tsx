import { ThemeContext } from 'contexts/ThemeContext'
import Markdown from 'markdown-to-jsx'
import React from 'react'
import { useContext, useState } from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import php from 'react-syntax-highlighter/dist/cjs/languages/prism/php'
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx'
import {
  darcula,
  solarizedlight
} from 'react-syntax-highlighter/dist/cjs/styles/prism'

SyntaxHighlighter.registerLanguage('tsx', tsx)
SyntaxHighlighter.registerLanguage('php', php)

type MarkdwonHighlighterProps = {
  children: string
}

function MarkdwonHighlighter({ children }: MarkdwonHighlighterProps) {
  const { isDark } = useContext(ThemeContext)
  const theme = isDark ? darcula : solarizedlight

  return (
    <div>
      <Markdown
        className=""
        options={{
          overrides: {
            SyntaxHighlighter: {
              component: SyntaxHighlighter,
              props: {
                style: { ...theme, width: 'fit-content' },
                className: 'w-fit'
              }
            }
          }
        }}
      >
        {children}
      </Markdown>
    </div>
  )
}

export default MarkdwonHighlighter
