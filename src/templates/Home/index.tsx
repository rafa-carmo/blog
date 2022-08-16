import { Container } from 'components/Container'
import { Base } from 'templates/Base'

import * as S from './styles'

export function Home() {
  return (
    <Base>
      {/* <div className="absolute top-0 right-0 left-0 z-0 pointer-events-none opacity-20 md:h-[40vh] bg-[url('https://img.freepik.com/vetores-gratis/vetor-de-fundo-de-tecnologia-digital-com-borda-de-hexagono-em-tom-roxo-escuro_53876-126069.jpg?w=2000')]"></div> */}
      <Container>
        <h1 className="text-white font-extrabold font-[Merriweather] text-5xl md:mt-32 relative z-1">
          Um blog de Programação
        </h1>
      </Container>
    </Base>
  )
}
