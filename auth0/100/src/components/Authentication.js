// import Auth0 Hook
import { useAuth0 } from '@auth0/auth0-react';

// import components
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';

const Authentication = () => {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? <LogoutButton /> : <LoginButton />
}

export default Authentication;
