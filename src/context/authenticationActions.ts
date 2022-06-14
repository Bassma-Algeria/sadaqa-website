import { AuthenticationAction } from './authenticationReducer';

const setToken = (token: string): AuthenticationAction => {
  return { type: 'SET_TOKEN', payload: { token } };
};

const removeToken = (): AuthenticationAction => {
  return { type: 'REMOVE_TOKEN' };
};

export { setToken, removeToken };
