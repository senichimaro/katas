// authentication hook
import { useAuth0 } from '@auth0/auth0-react';

// Material UI components
import { Button } from '@material-ui/core';

function LogoutButton(){
  const { logout } = useAuth0();
  return (
    <Button onClick={ () => logout({
      returnTo: window.location.origin
    }) } variant="contained">Log Out</Button>
  )
}

export default LogoutButton;
