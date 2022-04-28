import React from 'react';
import { TitleBar } from './components/TitleBar';

import styles from './ItemsList.module.scss';

type Info<T> = { item: T; index: number };

interface Props<ItemData> {
  title: string;
  data: ItemData[];
  renderItem: (info: Info<ItemData>) => React.ReactElement<ItemData>;
}

function ItemsList<T>({ title, data, renderItem }: Props<T>) {
  return (
    <div className={styles.container}>
      <TitleBar title={title} />
    </div>
  );
}

export { ItemsList };
