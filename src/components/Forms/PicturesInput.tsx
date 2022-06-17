import React from 'react';

import { FilesInput } from '../common/Inputs/FilesInput/FilesInput';

interface Props {
  name: string;
  label: string;
  pictures: File[];
  onPicturesChange: (pics: File[]) => void;
  className?: string;
}

const PicturesInput: React.FC<Props> = props => {
  return (
    <FilesInput
      {...props}
      files={props.pictures}
      onFilesChange={props.onPicturesChange}
      acceptedFilesType="image/*"
    />
  );
};

export { PicturesInput };
