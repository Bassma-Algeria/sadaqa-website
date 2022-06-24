import rendered from 'react-test-renderer';

import { PeopleNeedHelpType } from './PeopleNeedHelpType';

describe('PeopleNeedHelpType Page', () => {
  it('should render correclty without errors', () => {
    rendered.create(
      <PeopleNeedHelpType posts={[]} totalNumberOfPosts={10} type={'call-for-help'} />,
    );
    rendered.create(
      <PeopleNeedHelpType posts={[]} totalNumberOfPosts={10} type={'donation-requests'} />,
    );
    rendered.create(
      <PeopleNeedHelpType posts={[]} totalNumberOfPosts={10} type={'families-in-need'} />,
    );
  });
});
