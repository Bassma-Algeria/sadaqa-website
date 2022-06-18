import rendered from 'react-test-renderer';

import { AuthContextProvider } from '../../context/AuthContextProvider';
import { NewPost } from './NewPost';

describe('NewPost Page', () => {
  it('should render correclty without errors', () => {
    rendered.create(
      <AuthContextProvider>
        <NewPost />
      </AuthContextProvider>,
    );
  });
});
