import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import classNames from 'classnames/bind';

import styles from './PasswordInput.module.scss';

import { ICONS } from '../../../../utils/constants/Icons';

import { useRightToLeftDetector } from '../../../../utils/hooks/useRightToLeftDetector';

import { BaseInput } from '../BaseInput';

const cx = classNames.bind(styles);

interface Props extends React.ComponentProps<typeof BaseInput> {
  value: string;
  onValueChange: (value: string) => void;
}

const PasswordInput: React.FC<Props> = props => {
  const { rightToLeft } = useRightToLeftDetector();
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  return (
    <BaseInput {...props}>
      <div className={cx('container', { rightToLeft })}>
        <input
          id={props.name}
          name={props.name}
          type={isPasswordHidden ? 'password' : 'text'}
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
          value={props.value}
          autoComplete="current-password"
          onChange={e => props.onValueChange(e.target.value)}
        />

        <div
          className={styles.iconContainer}
          onClick={() => setIsPasswordHidden(!isPasswordHidden)}
        >
          <ReactSVG src={isPasswordHidden ? ICONS.HIDE_PASSWORD : ICONS.SEE_PASSWORD} />
        </div>
      </div>
    </BaseInput>
  );
};

export { PasswordInput };
