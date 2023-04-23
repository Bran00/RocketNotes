import { useState } from 'react'
import { Container, Links, Content } from './styles';

import { Header, Button, ButtonText, Section, Tag } from '../../components'

export function Details() {

  return (
    <Container>
      <Header />

      <main>
        <Content>

          <ButtonText title="Excluir Nota" />
          <h1>Introdução ao React</h1>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, omnis, nam corrupti nulla obcaecati mollitia unde iusto, praesentium natus possimus iste deleniti? Possimus, error! Dolorum quia commodi consequuntur magnam ex?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae explicabo quo rerum, quidem molestiae sint perspiciatis maiores doloribus illum laborum autem quisquam voluptatibus repellat beatae accusamus esse hic sapiente adipisci.
          </p>
          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">Item 1</a>
              </li>
              <li>
                <a href="#">Item 2</a>
              </li>
              <li>
                <a href="#">Item 3</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}
