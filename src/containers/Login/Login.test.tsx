import rendered from 'react-test-renderer';

import { AuthContextProvider } from '../../context/AuthContextProvider';
import { Login } from './Login';

describe('Login Page', () => {
  it('should render correclty without errors', () => {
    rendered.create(
      <AuthContextProvider>
        <Login />
      </AuthContextProvider>,
    );
  });
});
