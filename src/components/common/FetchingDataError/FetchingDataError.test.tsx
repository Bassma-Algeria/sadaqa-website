import rendered from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import { FetchingDataError } from './FetchingDataError';

describe('FetchingDataError', () => {
  it('should render the error message correctly', async () => {
    const Component = <FetchingDataError errorMessage="loading error" />;

    const tree = rendered.create(Component);
    const instance = render(Component);

    await instance.findByText('loading error');
    expect(tree).toMatchSnapshot();
  });

  it('should render the refrech message and call refrech when clicking the refrech button', async () => {
    const refrechMock = jest.fn();
    const Component = (
      <FetchingDataError
        errorMessage="loading error"
        refrech={refrechMock}
        refrechMessage="try again"
      />
    );

    const tree = rendered.create(Component);
    const instance = render(Component);

    fireEvent.click(await instance.findByText('try again'));

    expect(refrechMock).toBeCalledTimes(1);
    expect(tree).toMatchSnapshot();
  });
});
