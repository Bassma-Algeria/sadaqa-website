import rendered from 'react-test-renderer';

import { ItemsList } from './ItemsList';

describe('ItemsList component', () => {
  it('should render the items passed as props', () => {
    const data = [{ name: 'hi' }, { name: 'ho' }];

    const tree = rendered
      .create(
        <ItemsList title={'Title'} data={data} renderItem={({ item }) => <div>{item.name}</div>} />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
