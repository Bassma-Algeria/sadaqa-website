import { usePopup } from './usePopup';

import { NeedAuthPopup } from '../../../components/Popups/NeedAuthPopup/NeedAuthPopup';

const useNeedAuthPopup = () => {
  const { Popup, closePopup, openPopup } = usePopup(NeedAuthPopup);

  return { NeedAuthPopup: Popup, closePopup, openPopup };
};

export { useNeedAuthPopup };
