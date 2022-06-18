import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAuthContext } from '../../utils/hooks/useAuthContext';

function withAuthRequired<T>(Component: React.FC<T>): React.FC<T> {
  return props => {
    const { back } = useRouter();
    const { isAuthenticated } = useAuthContext();

    useEffect(() => {
      if (!isAuthenticated) back();
    }, []);

    return <Component {...props} />;
  };
}

export { withAuthRequired };
