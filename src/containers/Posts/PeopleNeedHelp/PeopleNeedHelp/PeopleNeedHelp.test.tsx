import rendered from 'react-test-renderer';

import { PeopleNeedHelp } from './PeopleNeedHelp';

describe('PeopleNeedHelp Page', () => {
  it('should render correclty without errors', () => {
    rendered.create(<PeopleNeedHelp />);
  });
});
