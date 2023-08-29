import React from "react"
import { Botao } from "./componentes/botao"
import { Nav } from "./componentes/nav"
import { Linkp } from "./componentes/link"
import { Secao } from "./componentes/secao"
import { Title } from "./componentes/titulo"
import { Texto } from "./componentes/texto"
import { Subt } from "./componentes/subtitulo"
import { Rodape } from "./componentes/rodape"

export default function Home() {
  return (
      <main>
          <Nav>
              <Linkp href = "#">Jevs Rakja</Linkp>
              <Linkp>Nossa Equipe</Linkp>
              <Linkp>Problema Porto</Linkp>
              <Linkp>Iniciativa Jevs</Linkp>
          </Nav>
          <Secao>
                <Title>Jevs Rakja</Title>
                <Texto>Aqui vem um texto</Texto>
          </Secao>
          <Secao>
            <Subt>Mais Informações</Subt>
            <Botao>Saiba Mais</Botao>
          </Secao>
          <Rodape>
            <Linkp>Jevs Rakja</Linkp>
            <Texto>Todos os direitos reservados</Texto>
          </Rodape>

      </main>
    )
}
