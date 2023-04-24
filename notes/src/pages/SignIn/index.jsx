import { Container, Form } from "./styles";
import { FiMail, FiLock } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignIn( ) {
  return (
    <Container>
      <Form>
        <h1>BranNotes</h1>
        <p>Aplicação para salvar e gerenciar seus links Úteis</p>

        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" type="text" icon={FiMail} />
        

        <Button title="Entrar" />

        <a href="#"> Criar Conta</a>
      </Form>
    </Container>
  )
}