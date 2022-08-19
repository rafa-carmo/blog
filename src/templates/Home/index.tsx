import { Container } from 'components/Container'
import { EnvelopeSimple } from 'phosphor-react'
import { Base } from 'templates/Base'

import * as S from './styles'

export function Home() {
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
            <S.NewsletterInput placeholder="Seja notificado de novidades" />
            <div className="absolute right-2 top-0 bottom-0 flex items-center opacity-30">
              <EnvelopeSimple size={32} weight="bold" />
            </div>
          </S.NewsletterContainer>
        </Container>
      </S.HeaderContainer>
    </Base>
  )
}
