import { FiPlus, FiSearch } from "react-icons/fi"

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles"

import { Header } from "../../components/Header"

import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section"

import { Note } from "../../components/Note"

export function Home() {
  return (
    <Container>
      <Brand>
        <h1> BrandNotes </h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText title="Todos" isActive />
        </li>
        <li>
          <ButtonText title="React" />
        </li>
        <li>
          <ButtonText title="NodeJS" />
        </li>
      </Menu>

      <Content>
        <Section title="Minhas notas">
          <Note
            data={{
              title: "React",
              tags: [{ name: "react" }, { name: "rocketseat" }],
            }}
          />
        </Section>
      </Content>

      <NewNote>
        <FiPlus />
        Criar Nota
      </NewNote>
    </Container>
  )
}
