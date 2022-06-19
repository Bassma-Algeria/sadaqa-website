import React, { useRef, useState } from 'react';
import { ReactSVG } from 'react-svg';
import classNames from 'classnames/bind';

import styles from './DropDownInput.module.scss';

import { ICONS } from '../../../../utils/constants/Icons';

import { useRightToLeftDetector } from '../../../../utils/hooks/useRightToLeftDetector';
import { useOutsideClickListener } from '../../../../utils/hooks/useOutsideClickListener';

import { BaseInput } from '../BaseInput';

const cx = classNames.bind(styles);

interface Props<T> extends React.ComponentProps<typeof BaseInput> {
  placeholder: string;
  value: T | undefined;
  onValueChange: (value: T) => void;
  options: { name: string; value: T }[];
}

function DropDownInput<T>(props: Props<T>) {
  const { rightToLeft } = useRightToLeftDetector();
  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);

  const selectedOption = props.options.find(option => option.value === props.value);

  return (
    <BaseInput {...props}>
      <div className={cx('container', { rightToLeft })} onClick={() => setIsOptionsOpen(true)}>
        <p className={cx({ active: !!selectedOption })}>
          {selectedOption?.name || props.placeholder}
        </p>
        <ReactSVG src={ICONS.DOWN_ARROW} />
      </div>

      {isOptionsOpen && (
        <OptionsPanel
          options={props.options}
          onValueChange={props.onValueChange}
          closePanel={() => setIsOptionsOpen(false)}
        />
      )}
    </BaseInput>
  );
}

interface OptionsPanelProps extends Pick<Props<any>, 'options' | 'onValueChange'> {
  closePanel: () => void;
}

const OptionsPanel: React.FC<OptionsPanelProps> = ({ closePanel, onValueChange, options }) => {
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClickListener(ref, closePanel);

  const handleOptionClick = (value: string) => {
    onValueChange(value);
    closePanel();
  };

  return (
    <div className={styles.optionsPanelContainer} ref={ref}>
      <div className={cx('optionsPanel')}>
        {options.map(({ name, value }) => (
          <p className={styles.option} key={value} onClick={() => handleOptionClick(value)}>
            {name}
          </p>
        ))}
      </div>
    </div>
  );
};

export { DropDownInput };
