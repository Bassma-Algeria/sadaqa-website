import React from 'react';

import { useRouter } from 'next/router';

import { HeroFeatured } from '../../../../components/Home/HeroFeatured/HeroFeatured';

type HeroFeaturedNeededProps = Omit<
  React.ComponentProps<typeof HeroFeatured>,
  'actionButtonOnClick' | 'directionReversed'
>;

interface Props extends HeroFeaturedNeededProps {
  actionButtonLinkTo: string;
  openNeedAuthPopup(): void;
}

const HeroSlide: React.FC<Props> = ({ actionButtonLinkTo: link, ...props }) => {
  const isAuthenticated = false;
  const { push, locale } = useRouter();

  const handleButtonClick = () => {
    if (link.includes('donate') && !isAuthenticated) {
      return props.openNeedAuthPopup();
    }

    push(link);
  };

  return (
    <HeroFeatured
      {...props}
      actionButtonOnClick={handleButtonClick}
      directionReversed={locale === 'ar'}
    />
  );
};

export { HeroSlide };
