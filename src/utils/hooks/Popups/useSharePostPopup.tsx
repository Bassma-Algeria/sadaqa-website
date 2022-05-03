import { usePopup } from './usePopup';
import { SharePostPopup } from '../../../components/Popups/SharePostPoup/SharePostPopup';

const useSharePostPopup = (postId: number) => {
  const { Popup, openPopup, closePopup } = usePopup(props => (
    <SharePostPopup {...props} postId={postId} />
  ));

  return { SharePopup: Popup, openPopup, closePopup };
};

export { useSharePostPopup };
