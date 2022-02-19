// import Auth0 Hook
import { useAuth0 } from '@auth0/auth0-react';

import logo from '../avatar.png';
import '../App.css';

// import components
import Authentication from './Authentication';


const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  let name, picture, email;
  if ( isAuthenticated ){
    name = user.name;
    picture = user.picture;
    email = user.email;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={ isAuthenticated ? picture : logo} className="App-logo" alt="logo" />
        <p>
          {
            isAuthenticated
            ? (
              <>
                <p>Hello {name}!</p>
                <p>Is {email} your address?</p>
              </>
            )
            : 'You Are Not Authenticated'
          }
        </p>
        <Authentication />
      </header>
    </div>
  );

}

export default Profile;
