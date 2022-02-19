# Auth0 kata
We will add a basic user login with authentication to a React.js app using Auth0. Auth0 with their npm package `@auth0/auth0-react`, which uses React context and hooks.



## Steps
1. In Auth0
  1. create application > react
  2. settings
    - Allowed Callback URLs : After user authenticates Auth0 callback to any of these URLs.
    - Allowed Logout URLs : valid URLs to redirect after logout from Auth0.
    - Allowed Web Origins : allowed origins for use with Cross-Origin Authentication

2. App config
  1. Create Provider
    3. .env variables from Auth0
      - domain: dev-72bpne5u.us.auth0.com
      - clientID: jWgfFWAGQ2UTRPfqKymmmutDdSdg3OFB
    4. Import Auth0Provider App Wrapper
      - domain
      - clientID
      - redirectUri
  5. import Auth0 hook useAuth0


1. In Auth0
  1. settings
    - Allowed Callback URLs : After user authenticates Auth0 callback to any of these URLs.
    - Allowed Logout URLs : valid URLs to redirect after logout from Auth0.
    - Allowed Web Origins : allowed origins for use with Cross-Origin Authentication

2. App config
  1. .env domain & clientID variables
  2. Create Provider Component src/auth/Auth0ProviderWithHistory.js
  3. wrapp the app with Router & Provider

3. Login/Logout Logic
  1. Provider: parent that allow setup configs
  2. ProtectedRoute: wrapper that restrict route access
  3. Login/Logout Hook: buttons triggering Auth0 Hook

4. User data
  1. get it from Auth0 Hook



## Packages
* dotenv
* @auth0/auth0-react
* react-router-dom
* @material-ui/core


















//
