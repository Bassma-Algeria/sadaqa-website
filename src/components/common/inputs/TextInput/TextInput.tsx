import React from 'react';
import classNames from 'classnames/bind';

import styles from './TextInput.module.scss';

import { useRightToLeftDetector } from '../../../../utils/hooks/useRightToLeftDetector';

import { BaseInput } from '../BaseInput';

const cx = classNames.bind(styles);

interface Props extends React.ComponentProps<typeof BaseInput> {
  placeholder: string;
  value: string;
  onValueChange: (value: string) => void;
}

const TextInput: React.FC<Props> = props => {
  const { rightToLeft } = useRightToLeftDetector();

  return (
    <BaseInput {...props}>
      <input
        type="text"
        id={props.name}
        name={props.name}
        className={cx('input', { rightToLeft })}
        autoComplete={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={e => props.onValueChange(e.target.value)}
      />
    </BaseInput>
  );
};

export { TextInput };
