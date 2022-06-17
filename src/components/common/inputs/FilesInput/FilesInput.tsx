import React, { useRef } from 'react';
import { ReactSVG } from 'react-svg';
import classNames from 'classnames/bind';
import { useTranslation } from 'next-i18next';

import styles from './FilesInput.module.scss';

import { useRightToLeftDetector } from '../../../../utils/hooks/useRightToLeftDetector';

import { ICONS } from '../../../../utils/constants/Icons';

import { Label } from '../common/Label/Label';
import { Button } from '../../Button/Button';
import { DragAndDropBox } from './components/DragAndDropBox';

const cx = classNames.bind(styles);

interface Props {
  name: string;
  label: string;
  files: File[];
  onFilesChange: (files: File[]) => void;
  acceptedFilesType?: string;
  className?: string;
  error?: string;
}

const FilesInput: React.FC<Props> = ({ error, className, acceptedFilesType, ...props }) => {
  const { t } = useTranslation('common');
  const { rightToLeft } = useRightToLeftDetector();

  const filesInputRef = useRef<HTMLInputElement>(null);

  const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let uploadedFiles = e.target.files;
    if (!uploadedFiles) return;

    let files = Array.from(uploadedFiles);
    if (acceptedFilesType) files = files.filter(file => !!file.type.match(acceptedFilesType));

    props.onFilesChange([...props.files, ...files]);
  };

  return (
    <div className={`${cx('container', { rightToLeft, error })} ${className}`}>
      <Label for={props.name}>{props.label}</Label>

      <div className={styles.dragAndDropBoxContainer}>
        <DragAndDropBox
          openFilesUploader={() => filesInputRef.current?.click()}
          onFilesDropped={files => props.onFilesChange([...props.files, ...files])}
          acceptedFilesType={acceptedFilesType}
        />
      </div>

      <div className={styles.uploadFilesButton}>
        <Button variant="greyFilled" type="button" onClick={() => filesInputRef.current?.click()}>
          <ReactSVG src={ICONS.UPLOAD} /> {t('upload-files')}
        </Button>
      </div>

      <p className={styles.error}>{error}</p>

      <input
        type="file"
        name={props.name}
        ref={filesInputRef}
        onChange={handleFilesChange}
        accept={acceptedFilesType}
        multiple
      />
    </div>
  );
};

export { FilesInput };
