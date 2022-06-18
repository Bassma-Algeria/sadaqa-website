import React from 'react';
import { useTranslation } from 'next-i18next';

import styles from '../../NewPost.module.scss';

import { DropDownInput } from '../../../../components/common/Inputs/DropDownInput/DropDownInput';
import { NameInput } from '../../../../components/Forms/NameInput';
import { PicturesInput } from '../../../../components/Forms/PicturesInput/PicturesInput';
import { TextAreaInput } from '../../../../components/common/Inputs/TextAreaInput/TextAreaInput';

const NewPostForm: React.FC = () => {
  const { t } = useTranslation(['new-post', 'common']);

  return (
    <form>
      <DropDownInput
        name="postType"
        label={t('advertisement-type')}
        placeholder={t('tap-to-choose', { ns: 'common' })}
        className={styles.input}
        value=""
        onValueChange={() => {}}
        options={[]}
      />
      <NameInput
        name="title"
        label={t('title')}
        placeholder={t('advertisement-title')}
        className={styles.input}
        value=""
        onValueChange={() => {}}
      />
      <TextAreaInput
        name="description"
        label={t('description')}
        placeholder={t('describe-your-advertisement')}
        className={styles.input}
        value=""
        onValueChange={() => {}}
      />
      {/* <WilayaDropDownInput value={""}
      className={styles.input} onValueChange={() => {}} /> */}

      <DropDownInput
        name="category"
        label={t('category', { ns: 'common' })}
        placeholder={t('tap-to-choose', { ns: 'common' })}
        className={styles.input}
        value=""
        onValueChange={() => {}}
        options={[]}
      />
      <PicturesInput
        name="postPictures"
        label={t('pictures')}
        className={styles.input}
        pictures={[]}
        onPicturesChange={() => {}}
      />
    </form>
  );
};

export { NewPostForm };
