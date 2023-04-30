import { FiPlus, FiSearch } from "react-icons/fi"
import { Link } from "react-router-dom";

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles"

import { Header } from "../../components/Header"

import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section"
import { Input } from "../../components/Input"

import { Note } from "../../components/Note"

export function Home() {
  return (
    <Container>
      <Brand>
        <h1> BrandNotes </h1>
      </Brand>

      <Header />

      <Menu>
        <li key="all">
          <ButtonText title="Todos" isActive />
        </li>
        <li key="react">
          <ButtonText title="React" />
        </li>
        <li key="node" >
          <ButtonText title="NodeJS" />
        </li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note
            data={{
              title: "React",
              tags: [{ name: "react" }, { name: "rocketseat" }, { name: "discover"}],
            }}
          />
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar Nota
      </NewNote>
    </Container>
  )
}
