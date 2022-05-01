import React from 'react';
import rendered from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';

import { IMAGES } from '../../../utils/constants/Images';
import { BasePostCard } from './BasePostCard';

describe('BasePostCard Component', () => {
  const navigateToPostPage = jest.fn();
  const navigateToTagPage = jest.fn();
  const likePost = jest.fn().mockResolvedValue({ success: true });
  const sharePost = jest.fn().mockResolvedValue({ success: true });

  const props = {
    createdAt: new Date().toISOString(),
    description:
      'Here is some post description, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
    title: 'Post Title',
    liked: false,
    likesCount: 3,
    location: 'jijel',
    likePost,
    sharePost,
    postPicture: IMAGES.DONATION_DEFAULT as any,
    tag: 'Donations',
    navigateToPostPage,
    navigateToTagPage,
  };

  it('should render correctly in the default view', () => {
    const tree = rendered.create(<BasePostCard {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly in the grid view', () => {
    const tree = rendered.create(<BasePostCard {...props} gridView />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly with the directionReversed', () => {
    const tree = rendered.create(<BasePostCard {...props} directionReversed />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly with the directionReversed and in grid view', () => {
    const tree = rendered.create(<BasePostCard {...props} directionReversed gridView />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should navigate to post page when clicking the title or the image', () => {
    const instance = render(<BasePostCard {...props} directionReversed gridView />);

    fireEvent.click(instance.getByText('Post Title').parentElement!);
    expect(navigateToPostPage).toBeCalledTimes(1);

    fireEvent.click(instance.getByAltText('post pic').parentElement!);
    expect(navigateToPostPage).toBeCalledTimes(2);
  });

  it('should navigate to tag page when clicking the tag', () => {
    const instance = render(<BasePostCard {...props} />);

    fireEvent.click(instance.getByText('Donations').parentElement!);
    expect(navigateToTagPage).toBeCalledTimes(1);
  });
});
