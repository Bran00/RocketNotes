import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from './styles';
import { useAuth } from '../../hooks/auth';

export function Header( ) {

  const { signOut } = useAuth();

  return (
   <Container>
    <Profile to="/profile">

      <img src="https://github.com/bran00.png" alt="Brando Rocha" />

      <div>
        <span>Bem Vindo</span>
        <strong>Brando Rocha</strong>
      </div>

    </Profile>

    <Logout onClick={signOut}>
      <RiShutDownLine />
    </Logout>
   </Container>
  )
}