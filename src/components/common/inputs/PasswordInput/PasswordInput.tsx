import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';

import styles from './PasswordInput.module.scss';

import { ICONS } from '../../../../utils/constants/Icons';
import { useLocaleDetector } from '../../../../utils/hooks/useLocaleDetecter';

import { BaseInput } from '../BaseInput';

interface Props extends React.ComponentProps<typeof BaseInput> {
  value: string;
  onValueChange: (value: string) => void;
}

const PasswordInput: React.FC<Props> = props => {
  const locale = useLocaleDetector();

  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  return (
    <BaseInput {...props}>
      <div className={`${styles.container} ${styles[locale]}`}>
        <input
          id={props.name}
          name={props.name}
          type={isPasswordHidden ? 'password' : 'text'}
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
          value={props.value}
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
