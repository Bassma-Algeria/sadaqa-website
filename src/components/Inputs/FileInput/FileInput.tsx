import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './FileInput.module.scss';
import { LocalIcons } from '../../../utils/constants/LocalIcons';
import { useTranslation } from '../../../utils/hooks/useTranslation';

const cx = classNames.bind(styles);

interface Props {
    value: File[];
    onChange: (val: File[]) => void;
    containerStyle?: string;
    acceptedTypes?: string[];
    max?: number;
}

const FileInput: React.FC<Props> = props => {
    if (props.max && props.value.length > props.max)
        throw new Error(`Value length is bigger than max ${props.value.length}`);

    const { t } = useTranslation('common');
    const inputRef = useRef<HTMLInputElement>(null);

    const [error, setError] = useState<string>();
    const [dragging, setDragging] = useState(false);

    const handleFilesCapture = (files: FileList) => {
        setError(undefined);

        if (!validateLength() || !validateType()) return;

        props.onChange([...files, ...props.value]);

        function validateLength(): boolean {
            if (!props.max) return true;

            const currentLength = props.value ? props.value.length : 0;

            if (currentLength + files.length <= props.max) return true;

            setError(`${t('files-length-exceeded-maximum')}: ${props.max}`);

            return false;
        }

        function validateType(): boolean {
            if (!props.acceptedTypes) return true;

            for (let i = 0; i < files.length; i++) {
                const file = files[i];

                if (file.type.match(new RegExp(props.acceptedTypes.join('|')))) continue;

                setError(
                    `${t('invalid-file-type')}: ${file.name}, ${t(
                        'types-accepted',
                    )}: ${props.acceptedTypes.join(', ')}`,
                );

                return false;
            }

            return true;
        }
    };

    const deleteFile = (file: File) => {
        setError(undefined);
        props.onChange(props.value.filter(f => f !== file));
    };

    return (
        <div className={`${props.containerStyle}`}>
            <div
                className={cx('container', { dragging })}
                onDrop={e => {
                    e.preventDefault();
                    e.stopPropagation();

                    setDragging(false);

                    handleFilesCapture(e.dataTransfer.files);
                }}
                onDragOver={e => {
                    e.preventDefault();
                    e.stopPropagation();
                }}
                onDragEnter={() => setDragging(true)}
                onDragLeave={() => setDragging(false)}
            >
                <div className={styles.uploadIconContainer}>
                    <LocalIcons.UPLOAD />
                </div>

                <p>
                    {!props.value.length && t('drag-to-upload-or')}

                    {!!props.value.length &&
                        props.value.map(f => (
                            <div key={f.name} className={cx('file')} onClick={() => deleteFile(f)}>
                                <p>- {f.name}</p>
                                <div className={cx('deleteIcon')}>
                                    <LocalIcons.DELETE />
                                </div>
                            </div>
                        ))}
                </p>

                <p className={cx('chooseFile')} onClick={() => inputRef.current?.click()}>
                    {t('choose-file')}
                </p>

                <input
                    type="file"
                    multiple={props.max !== 1}
                    onChange={e => handleFilesCapture(e.currentTarget.files!)}
                    accept={props.acceptedTypes?.join(', ')}
                    max={props.max}
                    ref={inputRef}
                    hidden
                />
            </div>

            {error && <p className={cx('error')}>{error}</p>}
        </div>
    );
};

export { FileInput };
