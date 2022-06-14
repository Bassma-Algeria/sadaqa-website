import { AuthenticationState } from './AuthContextProvider';

export type AuthenticationAction =
  | { type: 'SET_TOKEN'; payload: { token: string } }
  | { type: 'REMOVE_TOKEN'; payload: undefined };

type Actions = AuthenticationAction['type'];

const authenticationReducer = (
  state: AuthenticationState,
  action: AuthenticationAction,
): AuthenticationState => {
  return actionHandler[action.type](action.payload);
};

type ActionHandler = {
  [K in Actions]: (payload: any) => AuthenticationState;
};

const actionHandler: ActionHandler = {
  REMOVE_TOKEN: () => ({ isAuthenticated: false, token: undefined }),
  SET_TOKEN: ({ token }) => ({ isAuthenticated: true, token }),
};

export { authenticationReducer };
