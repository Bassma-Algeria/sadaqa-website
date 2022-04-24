import { fireEvent, getByRole, render } from '@testing-library/react';
import rendered from 'react-test-renderer';

import { Button } from './Button';

describe('Button Component', () => {
  it('Primary button should render correctly', () => {
    const tree = rendered.create(<Button variant={'primary'}>Button</Button>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Secondary Button should render correctly', () => {
    const tree = rendered.create(<Button variant={'secondary'}>Button</Button>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should be able to change the size of the button', () => {
    const largeButton = rendered
      .create(
        <Button variant="primary" size="lg">
          Button
        </Button>,
      )
      .toJSON();
    const smallButton = rendered
      .create(
        <Button variant="primary" size="sm">
          Button
        </Button>,
      )
      .toJSON();

    expect(largeButton).toMatchSnapshot();
    expect(smallButton).toMatchSnapshot();
  });

  it('should render the button full width', () => {
    const tree = rendered
      .create(
        <Button variant="secondary" fullWidth>
          Button
        </Button>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should pass a custom class to the button', () => {
    const tree = rendered
      .create(
        <Button variant="secondary" className="customClass">
          Button
        </Button>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should call onClick when pressing the button', () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <Button variant="primary" onClick={onClick}>
        Click
      </Button>,
    );

    fireEvent.click(getByRole('button'));

    expect(onClick).toBeCalledTimes(1);
  });

  it('should render the button disabled, and not call the onClick', () => {
    const onClick = jest.fn();
    const Component = () => (
      <Button variant="primary" onClick={onClick} disabled>
        Click
      </Button>
    );
    const tree = rendered.create(<Component />).toJSON();
    const { getByRole } = render(<Component />);

    fireEvent.click(getByRole('button'));

    expect(tree).toMatchSnapshot();
    expect(onClick).toBeCalledTimes(0);
  });
});
