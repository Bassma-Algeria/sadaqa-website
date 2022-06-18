import React from 'react';
import classNames from 'classnames/bind';

import styles from './TextAreaInput.module.scss';

import { useRightToLeftDetector } from '../../../../utils/hooks/useRightToLeftDetector';

import { BaseInput } from '../BaseInput';

const cx = classNames.bind(styles);

interface Props extends React.ComponentProps<typeof BaseInput> {
  placeholder: string;
  value: string;
  onValueChange: (value: string) => void;
}

const TextAreaInput: React.FC<Props> = props => {
  const { rightToLeft } = useRightToLeftDetector();

  return (
    <BaseInput {...props}>
      <textarea
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        className={cx('textarea', { rightToLeft })}
        value={props.value}
        onChange={e => props.onValueChange(e.target.value)}
      />
    </BaseInput>
  );
};

export { TextAreaInput };
