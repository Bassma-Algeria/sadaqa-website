import { useEffect } from 'react';

const useOutsideClickListener = (
  targetElementRef: React.RefObject<HTMLElement>,
  callback: () => void,
  excludedElements?: React.RefObject<HTMLElement>[],
) => {
  useEffect(() => {
    const handleMouseDown = ({ target: clickedElement }: MouseEvent) => {
      const targetContainsClickElement = targetElementRef.current?.contains(clickedElement as Node);

      const clickedElementIsExcluded = excludedElements?.find(({ current: excludedElement }) => {
        return excludedElement?.contains(clickedElement as Node);
      });

      if (!clickedElementIsExcluded && !targetContainsClickElement) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleMouseDown);
    return () => document.removeEventListener('mousedown', handleMouseDown);
  }, [targetElementRef, callback]);
};

export { useOutsideClickListener };
