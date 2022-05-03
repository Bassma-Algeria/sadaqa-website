import { fireEvent, render } from '@testing-library/react';
import rendered from 'react-test-renderer';

import { BasePopup } from './BasePopup';

describe('BasePopup Component', () => {
  const closePopup = jest.fn();

  beforeEach(() => {
    closePopup.mockReset();
  });

  const Popup = (props: any) => (
    <BasePopup {...props} closePopup={closePopup}>
      <h1>some content</h1>
    </BasePopup>
  );

  it('should render the default popup correctly', () => {
    const tree = rendered.create(<Popup />).toJSON();
    expect(tree).toMatchSnapshot();

    const instance = render(<Popup />);

    fireEvent.click(instance.getByTestId('closeButton'));
    fireEvent.click(instance.getByTestId('overlay'));

    expect(closePopup).toBeCalledTimes(2);
  });

  it('should render not the close button when passing the closePopup prop and not call it when clicking the close button or the overlay', () => {
    const tree = rendered.create(<Popup selfClose={false} />).toJSON();
    expect(tree).toMatchSnapshot();

    const instance = render(<Popup selfClose={false} />);
    const closeButton = instance.queryByTestId('closeButton');

    fireEvent.click(instance.getByTestId('overlay'));

    expect(closePopup).toBeCalledTimes(0);
    expect(closeButton).toBeNull;
  });
});
