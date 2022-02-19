// import Auth0 Hook
import { useAuth0 } from '@auth0/auth0-react';

// Material UI components
import { Button } from '@material-ui/core';


const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button onClick={ () => loginWithRedirect() }>
      Log In
    </Button>
  )
}

export default LoginButton;
