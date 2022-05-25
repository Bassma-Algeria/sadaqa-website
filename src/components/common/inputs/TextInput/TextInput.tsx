import React from 'react';

import styles from './TextInput.module.scss';

import { useLocaleDetector } from '../../../../utils/hooks/useLocaleDetecter';

import { BaseInput } from '../BaseInput';

interface Props extends React.ComponentProps<typeof BaseInput> {
  placeholder: string;
  value: string;
  onValueChange: (value: string) => void;
}

const TextInput: React.FC<Props> = props => {
  const locale = useLocaleDetector();

  return (
    <BaseInput {...props}>
      <input
        type="text"
        className={`${styles.input} ${styles[locale]}`}
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={e => props.onValueChange(e.target.value)}
      />
    </BaseInput>
  );
};

export { TextInput };
