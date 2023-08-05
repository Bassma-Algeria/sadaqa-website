import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from '../../Chat.module.scss';
import { useRouter } from 'next/router';

const cx = classNames.bind(styles);

interface Props {}

const Conversation: React.FC<Props> = () => {
    const [show, setShow] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setShow(!!router.query.with);
    }, [router.query.with]);

    return <div className={cx('conversation', { show })}>Conversation</div>;
};

export { Conversation };
