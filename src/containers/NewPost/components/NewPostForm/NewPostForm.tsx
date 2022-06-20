import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';

import styles from '../../NewPost.module.scss';

import { useNewPostFormHandler } from './hooks/useNewPostFormHandler';

import { NewPostPreview } from './NewPostPreview';
import { NameInput } from '../../../../components/Forms/NameInput';
import { Button } from '../../../../components/common/Button/Button';
import { Spinner } from '../../../../components/common/Spinner/Spinner';
import { WilayaDropDownInput } from '../../../../components/Forms/WilayaDropDownInput';
import { PicturesInput } from '../../../../components/Forms/PicturesInput/PicturesInput';
import { DropDownInput } from '../../../../components/common/Inputs/DropDownInput/DropDownInput';
import { TextAreaInput } from '../../../../components/common/Inputs/TextAreaInput/TextAreaInput';
import { DonationCategoryDropDownInput } from '../../../../components/Forms/DonationCategoryDropDownInput';

const NewPostForm: React.FC = () => {
  const { t } = useTranslation(['new-post', 'common']);

  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const { newPostValues, setNewPostValues, handleSubmit, error, isLoading } =
    useNewPostFormHandler();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <DropDownInput
          name="postType"
          label={t('advertisement-type', { ns: 'common' })}
          placeholder={t('tap-to-choose', { ns: 'common' })}
          className={styles.input}
          value={newPostValues.typeId}
          onValueChange={typeId => setNewPostValues({ ...newPostValues, typeId })}
          options={[
            { name: t('donations', { ns: 'common' }), value: 0 },
            { name: t('donation-requests', { ns: 'common' }), value: 1 },
            { name: t('families-in-need', { ns: 'common' }), value: 2 },
            { name: t('call-for-help', { ns: 'common' }), value: 3 },
          ]}
        />
        <NameInput
          name="title"
          label={t('title')}
          placeholder={t('advertisement-title')}
          className={styles.input}
          value={newPostValues.title}
          onValueChange={title => setNewPostValues({ ...newPostValues, title })}
        />
        <TextAreaInput
          name="description"
          label={t('description', { ns: 'common' })}
          placeholder={t('describe-your-advertisement')}
          className={styles.input}
          value={newPostValues.description}
          onValueChange={description => setNewPostValues({ ...newPostValues, description })}
        />
        <WilayaDropDownInput
          className={styles.input}
          value={newPostValues.wilaya}
          onValueChange={wilaya => setNewPostValues({ ...newPostValues, wilaya })}
        />
        <DonationCategoryDropDownInput
          className={styles.input}
          value={newPostValues.category}
          onValueChange={category => setNewPostValues({ ...newPostValues, category })}
        />
        <PicturesInput
          name="postPictures"
          label={t('pictures')}
          className={styles.input}
          pictures={newPostValues.pictures}
          onPicturesChange={pictures => setNewPostValues({ ...newPostValues, pictures })}
        />

        <p className={styles.error}>{error}</p>

        <Button className={styles.button} height="50px" variant="primary" type="submit" fullWidth>
          {isLoading ? <Spinner color="white" /> : t('post')}
        </Button>
        <Button
          className={styles.button}
          variant="greyFilled"
          type="button"
          fullWidth
          onClick={() => setIsPreviewOpen(true)}
        >
          {t('preview')}
        </Button>
      </form>
      {isPreviewOpen && <NewPostPreview closePreview={() => setIsPreviewOpen(false)} />}
    </>
  );
};

export { NewPostForm };
