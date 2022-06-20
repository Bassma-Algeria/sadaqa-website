import { useEffect } from 'react';

const useOutsideHoverListener = (
  targetElementRef: React.RefObject<HTMLElement>,
  callback: () => void,
) => {
  useEffect(() => {
    targetElementRef.current?.addEventListener('mouseleave', callback);

    return () => targetElementRef.current?.removeEventListener('mouseleave', callback);
  }, [targetElementRef]);
};

export { useOutsideHoverListener };
