import React, { useRef, useState } from 'react';
import { ReactSVG } from 'react-svg';
import classNames from 'classnames/bind';

import styles from './DropDownInput.module.scss';

import { ICONS } from '../../../../utils/constants/Icons';

import { useRightToLeftDetector } from '../../../../utils/hooks/useRightToLeftDetector';

import { BaseInput } from '../BaseInput';
import { useOutsideClickListener } from '../../../../utils/hooks/useOutsideClickListener';

const cx = classNames.bind(styles);

interface Props extends React.ComponentProps<typeof BaseInput> {
  placeholder: string;
  value?: string;
  onValueChange: (value: string) => void;
  options: { label: string; value: string }[];
}

const DropDownInput: React.FC<Props> = props => {
  const { rightToLeft } = useRightToLeftDetector();
  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);

  return (
    <BaseInput {...props}>
      <div className={cx('container', { rightToLeft })} onClick={() => setIsOptionsOpen(true)}>
        <p className={cx({ active: !!props.value })}>{props.value || props.placeholder}</p>
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
};

interface OptionsPanelProps extends Pick<Props, 'options'> {
  onValueChange: (value: string) => void;
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
      <div className={styles.optionsPanel}>
        {options.map(({ label, value }) => (
          <p className={styles.option} key={value} onClick={() => handleOptionClick(value)}>
            {label}
          </p>
        ))}
      </div>
    </div>
  );
};

export { DropDownInput };
