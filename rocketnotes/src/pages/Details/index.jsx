import { useState } from 'react'
import { Container } from './styles';

import { Button } from '../../components/Button'

export function Details() {
  const name = "Brando"
  const saudation = "Welcome to my world"

  return (
    <Container>
      <h1>Hello {name}, {saudation}</h1>
      <Button title="Clique aqui"/>
      <Button title="Entrar"/>
      <Button title="Cadastrar"/>
    </Container>
  )
}
