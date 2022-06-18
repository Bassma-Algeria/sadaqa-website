import React from 'react';
import { useTranslation } from 'next-i18next';

import styles from '../../NewPost.module.scss';

import { DropDownInput } from '../../../../components/common/Inputs/DropDownInput/DropDownInput';
import { NameInput } from '../../../../components/Forms/NameInput';
import { PicturesInput } from '../../../../components/Forms/PicturesInput/PicturesInput';
import { TextAreaInput } from '../../../../components/common/Inputs/TextAreaInput/TextAreaInput';
import { WilayaDropDownInput } from '../../../../components/Forms/WilayaDropDownInput';
import { Button } from '../../../../components/common/Button/Button';

const NewPostForm: React.FC = () => {
  const { t } = useTranslation(['new-post', 'common']);

  // const { newPostValues, setNewPostValues, handleSubmit, error } = useNewPostFormHandler();
  const handleSubmit = () => {};
  const error = '';

  return (
    <form onSubmit={handleSubmit}>
      <DropDownInput
        name="postType"
        label={t('advertisement-type')}
        placeholder={t('tap-to-choose', { ns: 'common' })}
        className={styles.input}
        value={''}
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
      <WilayaDropDownInput className={styles.input} value={''} onValueChange={() => {}} />
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

      <p className={styles.error}>{error}</p>

      <Button className={styles.button} variant="primary" type="submit" fullWidth>
        {t('post')}
      </Button>
      <Button className={styles.button} variant="greyFilled" type="button" fullWidth>
        {t('preview')}
      </Button>
    </form>
  );
};

export { NewPostForm };
