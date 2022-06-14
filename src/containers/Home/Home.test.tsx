import rendered from 'react-test-renderer';

import { Home } from './Home';
import { AuthContextProvider } from '../../context/AuthContextProvider';

describe('Home Page', () => {
  it('should render correclty without errors', () => {
    rendered.create(
      <AuthContextProvider>
        <Home />
      </AuthContextProvider>,
    );
  });
});
