import { Container } from 'components/Container'
import { Heading } from 'components/Heading'
import { PostCardProps } from 'components/PostCard'
import { MagnifyingGlass } from 'phosphor-react'
import { Base } from 'templates/Base'

import { PostCard } from '../../components/PostCard/index'
import * as S from './styles'
interface HomeProps {
  cards: PostCardProps[]
}

export function Home({ cards }: HomeProps) {
  return (
    <Base>
      {/* <div className="absolute top-0 right-0 left-0 z-0 pointer-events-none opacity-20 md:h-[40vh] bg-[url('https://img.freepik.com/vetores-gratis/vetor-de-fundo-de-tecnologia-digital-com-borda-de-hexagono-em-tom-roxo-escuro_53876-126069.jpg?w=2000')]"></div> */}
      <S.HeaderContainer>
        <Container>
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
              <MagnifyingGlass size={32} weight="bold" className="opacity-30" />
            </button>
          </S.NewsletterContainer>
        </Container>
      </S.HeaderContainer>
      <Container>
        <Heading text="Destaques" />
        <div className="flex md:flex-shrink gap-8 w-full h-full mt-4 flex-col md:flex-row">
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
      <Container>
        <div className="mt-10 w-full h-screen flex gap-10 md:flex-row flex-col">
          <div className="flex-[60%] bg-white w-full p-10">Matérias</div>
          <div className="flex-1 bg-white">Side</div>
        </div>
      </Container>

      <footer className=" grid items-center w-full bg-white h-52 mt-10 text-center">
        footer
      </footer>
    </Base>
  )
}
