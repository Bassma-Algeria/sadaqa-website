import { AuthenticationState } from './AuthContextProvider';

export type AuthenticationAction =
  | { type: 'SET_TOKEN'; payload: { token: string } }
  | { type: 'REMOVE_TOKEN' };

type Actions = AuthenticationAction['type'];

const authenticationReducer = (
  state: AuthenticationState,
  action: AuthenticationAction,
): AuthenticationState => {
  switch (action.type) {
    case 'SET_TOKEN':
      return { isAuthenticated: true, token: action.payload.token };
      break;

    case 'REMOVE_TOKEN':
      return { isAuthenticated: false, token: undefined };
      break;

    default:
      return state;
      break;
  }
};

export { authenticationReducer };
