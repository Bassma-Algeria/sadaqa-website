import rendered from 'react-test-renderer';
import { Title } from './Title';

describe('Title component', () => {
  it('should render the big Title correctly', () => {
    const tree = rendered.create(<Title title="Title" variant="big" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render the small Title correctly', () => {
    const tree = rendered.create(<Title title="Title" variant="small" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be able to add a custom class', () => {
    const tree = rendered
      .create(<Title title="Title" variant="small" className="someClass" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be able to change the alignment', () => {
    const leftAlign = rendered
      .create(<Title title="Title" variant="small" align="left" />)
      .toJSON();
    const centerAlign = rendered
      .create(<Title title="Title" variant="small" align="center" />)
      .toJSON();

    expect(leftAlign).toMatchSnapshot();
    expect(centerAlign).toMatchSnapshot();
  });
});
