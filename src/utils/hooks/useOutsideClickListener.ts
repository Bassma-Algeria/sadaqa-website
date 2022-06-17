import { useEffect } from 'react';

const useOutsideClickListener = (
  targetElementRef: React.RefObject<HTMLElement>,
  callback: () => void,
) => {
  useEffect(() => {
    const handleMouseDown = ({ target: clickedElement }: MouseEvent) => {
      const targetContainsClickedElement = targetElementRef.current?.contains(
        clickedElement as Node,
      );

      if (!targetContainsClickedElement) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleMouseDown);
    return () => document.removeEventListener('mousedown', handleMouseDown);
  }, [targetElementRef]);
};

export { useOutsideClickListener };
