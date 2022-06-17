import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import classNames from 'classnames/bind';
import { useTranslation } from 'next-i18next';

import styles from '../FilesInput.module.scss';

import { ICONS } from '../../../../../utils/constants/Icons';

const cx = classNames.bind(styles);

interface DragAndDropProps {
  openFilesUploader: () => void;
  onFilesDropped: (files: File[]) => void;
  acceptedFilesType?: string;
}

const DragAndDropBox: React.FC<DragAndDropProps> = ({
  openFilesUploader,
  onFilesDropped,
  acceptedFilesType,
}) => {
  const { t } = useTranslation('common');
  const [isDraggedOver, setIsDraggedOver] = useState<boolean>(false);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggedOver(false);

    let droppedFiles = Array.from(e.dataTransfer.files);
    if (acceptedFilesType)
      droppedFiles = droppedFiles.filter(file => !!file.type.match(acceptedFilesType));

    onFilesDropped(droppedFiles);
  };

  return (
    <div
      className={cx('dragAndDropBox', { isDraggedOver })}
      onDragOver={e => e.preventDefault()}
      onDragEnter={() => setIsDraggedOver(true)}
      onDragLeave={() => setIsDraggedOver(false)}
      onDrop={handleDrop}
    >
      <ReactSVG src={ICONS.UPLOAD} />
      <p>
        {t('drag-and-drop')} <br /> {t('or')} <br />{' '}
        <span onClick={openFilesUploader}>{t('browse-files')}</span>
      </p>
    </div>
  );
};

export { DragAndDropBox };
