import { FiPlus, FiSearch } from 'react-icons/fi'

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles"

import { Header, ButtonText, Button, Input } from "../../components"

export function Home() {
  return (
    <Container>
      <Brand>
        <h1> BrandNotes </h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title="Todos" isActive /></li>
        <li><ButtonText title="React" /></li>
        <li><ButtonText title="NodeJS" /></li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>

      <Content></Content>

      <NewNote>
        <FiPlus />
        Criar Nota
      </NewNote>
    </Container>
  )
}
