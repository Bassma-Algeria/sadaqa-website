import rendered from 'react-test-renderer';
import { Spinner } from './Spinner';

describe('Spinner component', () => {
  it('should render correctly', () => {
    const tree = rendered.create(<Spinner />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be able to add custom classes', () => {
    const tree = rendered
      .create(<Spinner className="custom" containerClass="customContainer" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be able to change the default color', () => {
    const tree = rendered.create(<Spinner color="white" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
