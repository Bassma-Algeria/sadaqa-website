import React from 'react';

import styles from './TextInput.module.scss';

import { BaseInput } from '../BaseInput';

interface Props extends React.ComponentProps<typeof BaseInput> {
  placeholder: string;
  value: string;
  onValueChange: (value: string) => void;
}

const TextInput: React.FC<Props> = props => {
  return (
    <BaseInput {...props}>
      <input
        type="text"
        id={props.name}
        name={props.name}
        className={styles.input}
        autoComplete={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={e => props.onValueChange(e.target.value)}
      />
    </BaseInput>
  );
};

export { TextInput };
