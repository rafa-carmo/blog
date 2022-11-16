import { Container } from 'components/Container'
import { Heading } from 'components/Heading'
import { PostCardProps } from 'components/PostCard'
import { PostCard } from 'components/PostCard/index'
import PostCardTest from 'components/PostCardTest'
import { MagnifyingGlass } from 'phosphor-react'
import { Base } from 'templates/Base'

import * as S from './styles'
import SvgComponent from './SvgComponent'
interface HomeProps {
  cards: PostCardProps[]
  posts: PostCardProps[]
}

export function Home({ cards, posts }: HomeProps) {
  console.log(25 % 5)
  return (
    <Base>
      {/* <div className="absolute top-0 right-0 left-0 z-0 pointer-events-none opacity-20 md:h-[40vh] bg-[url('https://img.freepik.com/vetores-gratis/vetor-de-fundo-de-tecnologia-digital-com-borda-de-hexagono-em-tom-roxo-escuro_53876-126069.jpg?w=2000')]"></div> */}
      <S.HeaderContainer>
        <Container className="flex justify-between">
          <div>
            <S.Header>
              <S.Title>Blog de programação</S.Title>
              <S.Subtitle>
                Dicas e tutoriais para você aprimorar seu codigo.
              </S.Subtitle>
            </S.Header>
            <S.NewsletterContainer>
              <S.NewsletterInput placeholder="O que está procurando?" />
              <button className="absolute right-2 top-0 bottom-0 flex items-center gap-2">
                {/* <EnvelopeSimple size={32} weight="bold" className="opacity-30" /> */}
                <MagnifyingGlass
                  size={32}
                  weight="bold"
                  className="opacity-30"
                />
              </button>
            </S.NewsletterContainer>
          </div>

          <div className="w-full h-full max-w-md">
            <SvgComponent />
          </div>
        </Container>
      </S.HeaderContainer>

      <Container>
        <Heading text="Destaques" />
        <div className="flex md:flex-shrink gap-8 w-full h-full mt-4 flex-col md:flex-row just">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className="border"
              style={{ flex: `${index === 0 ? '50%' : '25%'}` }}
            >
              <PostCard {...card} size={index === 0 ? 'large' : 'medium'} />
            </div>
          ))}
        </div>
      </Container>
      <div className="grid place-items-center my-8">
        <div className="w-3/4 grid place-items-center h-24 bg-zinc-400">
          Anuncio?
        </div>
      </div>
      <Container>
        <div className="mt-14">
          <Heading text="Ultimos posts" />
        </div>
        <div className="mt-2 mb-10 w-full flex gap-10 md:flex-row flex-col">
          <div className="flex-1 w-full p-10 ">
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
              {posts.map((card, index) => {
                return (index + 1) % 6 === 0 ? (
                  <>
                    <div className="w-full h-full bg-zinc-400 p-4 rounded-lg grid place-items-center">
                      AdSense
                    </div>
                    <PostCardTest
                      key={index}
                      background={card.background}
                      category={card.category}
                      description={card.description || 'Description'}
                      title={card.title}
                      slug={card.title}
                    />
                  </>
                ) : (
                  <PostCardTest
                    key={index}
                    background={card.background}
                    category={card.category}
                    description={card.description || 'Description'}
                    title={card.title}
                    slug={card.title}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </Base>
  )
}
