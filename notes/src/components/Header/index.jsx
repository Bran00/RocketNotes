import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from './styles';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/user.png'

export function Header( ) {
  const { signOut, user } = useAuth()


   const avatarUrl = user.avatar
     ? `${api.defaults.baseURL}/files/${user.avatar}`
     : avatarPlaceholder

  
  return (
   <Container>
    <Profile to="/profile">

      <img src={avatarUrl} alt={`${user.name} profile`} />

      <div>
        <span>Bem Vindo</span>
        <strong>{user.name}</strong>
      </div>

    </Profile>

    <Logout onClick={signOut}>
      <RiShutDownLine />
    </Logout>
   </Container>
  )
}