import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import styles from '../Navbar.module.scss';

import { ProgressLoader } from './ProgressLoader';

const RouteChangingProgressLoader: React.FC = () => {
  const router = useRouter();

  const [isRouterChangingStart, setIsRouterChangingStart] = useState<boolean>(false);
  const [isRouteChangingComplete, setIsRouteChangingComplete] = useState<boolean>(false);

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setIsRouteChangingComplete(false);
      setIsRouterChangingStart(true);
    });

    router.events.on('routeChangeComplete', () => {
      setIsRouteChangingComplete(true);
      setIsRouterChangingStart(false);
    });
  }, []);

  return (
    <div className={styles.progressLoaderContainer}>
      <ProgressLoader isLoading={isRouterChangingStart} isComplete={isRouteChangingComplete} />
    </div>
  );
};

export { RouteChangingProgressLoader };
