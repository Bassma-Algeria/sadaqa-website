import React, { useState } from 'react';

const usePopup = (PopupComponent: React.FC<{ closePopup: () => void }>) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const Popup = () => {
    return isPopupOpen ? <PopupComponent closePopup={closePopup} /> : null;
  };

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return { Popup, openPopup, closePopup };
};

export { usePopup };
