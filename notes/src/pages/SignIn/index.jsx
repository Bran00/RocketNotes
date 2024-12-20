import { useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Form, Background } from "./styles"

import { useAuth } from "../../hooks/auth";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignIn( ) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password});
  }

  return (
    <Container>
      <Form>
        <h1>BranNotes</h1>
        <p>Aplicação para salvar e gerenciar seus links Úteis</p>

        <h2>Faça seu login</h2>

        <Input 
        placeholder="E-mail" 
        type="text" 
        icon={FiMail}
        onChange={handleEmail} 
        />

        <Input 
        placeholder="Senha" 
        type="password" 
        icon={FiLock} 
        onChange={handlePassword}
        />
        

        <Button 
        title="Entrar"
        onClick={handleSignIn}
        />

        <Link to="/register">
            Criar conta
        </Link>
      </Form>

      <Background />
    </Container>
  )
}