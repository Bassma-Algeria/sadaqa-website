import { fireEvent, render } from '@testing-library/react';
import rendered from 'react-test-renderer';
import { IMAGES } from '../../../utils/constants/Images';

import { Avatar } from './Avatar';

describe('Avatar Component', () => {
  it('should render the default avatar correctly', () => {
    const tree = rendered.create(<Avatar image={IMAGES.DEFAULT_PROFILE_PIC.src} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should be able to change the size of the avatar', () => {
    const tree = rendered
      .create(<Avatar image={IMAGES.DEFAULT_PROFILE_PIC.src} size={40} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
