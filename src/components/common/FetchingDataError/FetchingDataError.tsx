import React from 'react';

import styles from './FetchingDataError.module.scss';

interface Props {
  errorMessage: string;
  containerClass?: string;
  refrechMessage?: string;
  refrech?: () => Promise<void>;
}

const FetchingDataError: React.FC<Props> = ({ containerClass, ...props }) => {
  return (
    <div className={`${styles.container} ${containerClass}`}>
      <p>{props.errorMessage}</p>

      {props.refrech && <button onClick={props.refrech}>{props.refrechMessage}</button>}
    </div>
  );
};

export { FetchingDataError };
