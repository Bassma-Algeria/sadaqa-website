import React from 'react';

interface Props {
  name: string;
  label: string;
  files: string[];
  onFilesChange: (files: string[]) => void;
  className?: string;
}

const FilesInput: React.FC<Props> = props => {
  return <div>{props.label}</div>;
};

export { FilesInput };
