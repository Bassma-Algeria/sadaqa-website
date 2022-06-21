import React from 'react';

import { IMAGES } from '../../utils/constants/Images';

import { Avatar } from '../common/Avatar/Avatar';

interface Props extends Omit<React.ComponentProps<typeof Avatar>, 'image'> {
  profilePicture?: string;
}

const UserAvatar: React.FC<Props> = props => {
  return <Avatar {...props} image={props.profilePicture || IMAGES.DEFAULT_PROFILE_PIC.src} />;
};

export { UserAvatar };
