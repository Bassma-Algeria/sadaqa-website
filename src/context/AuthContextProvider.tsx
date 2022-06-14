import React, { useReducer } from 'react';

import { AuthenticationAction, authenticationReducer } from './authenticationReducer';

interface AuthenticatedState {
  isAuthenticated: true;
  token: string;
}

interface NotAuthenticatedState {
  isAuthenticated: false;
  token: undefined;
}

export type AuthenticationState = AuthenticatedState | NotAuthenticatedState;

interface AuthContextValues {
  isAuthenticated: AuthenticationState['isAuthenticated'];
  token: AuthenticationState['token'];
  dispatch: React.Dispatch<AuthenticationAction>;
}

const AuthContext = React.createContext<AuthContextValues | null>(null);

const AuthContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(authenticationReducer, {
    isAuthenticated: false,
    token: undefined,
  });

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: state.isAuthenticated, token: state.token, dispatch }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, AuthContext };
