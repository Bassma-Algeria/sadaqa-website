import React, { useEffect } from 'react';
import { ReactSVG } from 'react-svg';

import styles from './PicturesInput.module.scss';

import { ICONS } from '../../../utils/constants/Icons';

import { FilesInput } from '../../common/Inputs/FilesInput/FilesInput';

interface Props {
  name: string;
  label: string;
  pictures: File[];
  onPicturesChange: (pics: File[]) => void;
  className?: string;
}

const PicturesInput: React.FC<Props> = props => {
  const handleDelete = (index: number) => {
    const newPictures = props.pictures.filter((_, i) => index !== i);

    props.onPicturesChange(newPictures);
  };

  return (
    <>
      <FilesInput
        {...props}
        files={props.pictures}
        onFilesChange={props.onPicturesChange}
        acceptedFilesType="image/*"
      />

      <SelectedPicturesPreview pictures={props.pictures} deletePicture={handleDelete} />
    </>
  );
};

interface SelectedPicturesPreviewProps {
  pictures: File[];
  deletePicture: (index: number) => void;
}

const SelectedPicturesPreview: React.FC<SelectedPicturesPreviewProps> = props => {
  const tempPicturesUrls: string[] = props.pictures.map(pic => URL.createObjectURL(pic));

  useEffect(() => {
    return () => {
      tempPicturesUrls.map(url => URL.revokeObjectURL(url));
    };
  }, [tempPicturesUrls]);

  return (
    <div className={styles.picturesPreviewContainer}>
      {tempPicturesUrls.map((url, index) => (
        <div className={styles.picture}>
          <ReactSVG
            onClick={() => props.deletePicture(index)}
            className={styles.closeIconContainer}
            src={ICONS.CLOSE}
          />
          <img src={url} alt="uploaded picture preview" />
        </div>
      ))}
    </div>
  );
};

export { PicturesInput };
