import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from './styles';

export function Header( ) {

  return (
   <Container>
    <Profile>

      <img src="https://github.com/bran00.png" alt="Brando Rocha" />

      <div>
        <span>Bem Vindo</span>
        <strong>Brando Rocha</strong>
      </div>

    </Profile>

    <Logout>
      <RiShutDownLine />
    </Logout>
   </Container>
  )
}