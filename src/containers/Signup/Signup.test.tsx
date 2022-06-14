import rendered from 'react-test-renderer';

import { Signup } from './Signup';
import { AuthContextProvider } from '../../context/AuthContextProvider';

describe('Signup Page', () => {
  it('should render correclty without errors', () => {
    rendered.create(
      <AuthContextProvider>
        <Signup />
      </AuthContextProvider>,
    );
  });
});
