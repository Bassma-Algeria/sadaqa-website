import { useState } from 'react';

import UnauthorizePopup from '../../../../../components/common/pop-ups/UnauthorizePopup';

const useUnauthorizePopup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const Popup = () => {
    return isPopupOpen ? (
      <UnauthorizePopup action="createNewAd" setIsPopupOpen={setIsPopupOpen} />
    ) : null;
  };

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return { Popup, openPopup, closePopup };
};

export { useUnauthorizePopup };
