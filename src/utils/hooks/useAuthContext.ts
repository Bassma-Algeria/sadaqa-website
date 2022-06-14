import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContextProvider';

const useAuthContext = () => {
  const values = useContext(AuthContext);

  if (!values) throw new Error('Component should be wrapped with AuthContextProvider');

  return values;
};

export { useAuthContext };
