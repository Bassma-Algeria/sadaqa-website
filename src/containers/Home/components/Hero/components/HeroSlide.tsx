import React from 'react';

import { useRouter } from 'next/router';

import { HeroFeatured } from '../../../../../components/Home/HeroFeatured/HeroFeatured';

interface Props extends Omit<React.ComponentProps<typeof HeroFeatured>, 'actionButtonOnClick'> {
  actionButtonLinkTo: string;
  openNeedAuthPopup(): void;
}

const HeroSlide: React.FC<Props> = ({ actionButtonLinkTo: link, ...props }) => {
  const isAuthenticated = false;
  const router = useRouter();

  const handleButtonClick = () => {
    router.prefetch(link);

    if (link.includes('donate') && !isAuthenticated) {
      return props.openNeedAuthPopup();
    }

    router.push(link);
  };

  return <HeroFeatured {...props} actionButtonOnClick={handleButtonClick} />;
};

export { HeroSlide };
