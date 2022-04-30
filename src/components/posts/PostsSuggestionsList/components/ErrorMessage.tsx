import React from 'react';

interface Props {
  refrech: () => Promise<void>;
}

const ErrorMessage: React.FC<Props> = ({ refrech }) => {
  return (
    <p>
      Something went wrong, <button onClick={refrech}>refrech</button>
    </p>
  );
};

export { ErrorMessage };
