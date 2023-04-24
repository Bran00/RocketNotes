import { Container, Form,  Background } from "./styles";
import { FiMail, FiLock } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignUp () {
  return (
    <Container>
      <Background />
      <Form>
        <h1>BranNotes</h1>
        <p>Aplicação para salvar e gerenciar seus links Úteis</p>

        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" type="text" icon={FiMail} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button title="Cadastrar" />

        <a href="#"> Já possui uma conta? Faça login</a>
      </Form>
    </Container>
  )
}