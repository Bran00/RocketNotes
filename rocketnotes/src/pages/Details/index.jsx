import { useState } from 'react'
import { Container, Links } from './styles';

import { Header, Button, Section, Tag,  } from '../../components'

export function Details() {

  return (
    <Container>
      <Header />

      <Section title="Links úteis">
        <Links>
          <li><a href="#">Item 1</a></li>
          <li><a href="#">Item 2</a></li>
          <li><a href="#">Item 3</a></li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="express" />
        <Tag title="node" />
      </Section>

      <Button title="Voltar" />
    </Container>
  )
}
