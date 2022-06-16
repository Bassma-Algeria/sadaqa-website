import React from 'react';

import { FilesInput } from '../common/Inputs/FilesInput/FilesInput';

interface Props {
  name: string;
  label: string;
  pictures: string[];
  onPicturesChange: (pics: string[]) => void;
  className?: string;
}

const PicturesInput: React.FC<Props> = props => {
  return <FilesInput {...props} files={props.pictures} onFilesChange={props.onPicturesChange} />;
};

export { PicturesInput };
