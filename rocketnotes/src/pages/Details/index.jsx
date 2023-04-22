import { useState } from 'react'
import { Container } from './styles';

export function Details() {
  const name = "Brando"
  const saudation = "Welcome to my world"

  return (
    <Container>
      <h1>Hello {name}, {saudation}</h1>
      
    </Container>
  )
}
