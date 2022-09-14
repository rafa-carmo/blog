import { Container } from 'components/Container'
import MarkdwonHighlighter from 'components/MarkdownHighlighter'
import { url } from 'inspector'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import { Base } from 'templates/Base'
import { dateFormat } from 'utils/dateFormat'

import mock from './mock'
import * as S from './styles'

export function PostTemplate() {
  return (
    <section>
      <div className="absolute w-full max-w-screen z-0 bg-center bg-cover h-96 opacity-40">
        {/* style={{ backgroundImage: `url("${mock.background.url}" )` }} */}
        <Image
          src={mock.background.url}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={mock.background.url}
          alt="Image"
        />
      </div>
      <Base>
        <div className="relative mt-32 mb-20 z-10 px-20 flex justify-center flex-col items-center">
          <h1 className="text-zinc-200 font-bold text-6xl">{mock.title}</h1>
          <span className="text-zinc-500 text-sm mt-4 pl-8">
            <time dateTime={dateFormat({ date: mock.createdAt, type: 'seo' })}>
              {dateFormat({ date: mock.createdAt })}
            </time>
          </span>
        </div>

        <div className="flex gap-5 relative z-10 mb-24 justify-center">
          <div>
            <Container>
              <div className="flex-1  p-10 dark:text-zinc-200 text-zinc-900">
                <MarkdwonHighlighter>{mock.description}</MarkdwonHighlighter>
              </div>
            </Container>
          </div>
          <div className="w-80 min-h-screen text-zinc-200 p-10 bg-zinc-500">
            Area de Anuncios
          </div>
        </div>
      </Base>
    </section>
  )
}
