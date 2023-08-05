import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useRouter } from 'next/router';

import styles from '../../Chat.module.scss';

import { ConversationHead } from './ConversationHead';
import { ConversationBody } from './ConversationBody';
import { ConversationInput } from './ConversationInput';

const cx = classNames.bind(styles);

interface Props {}

const Conversation: React.FC<Props> = () => {
    const [show, setShow] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setShow(!!router.query.with);
    }, [router.query.with]);

    return (
        <div className={cx('conversation', { show })}>
            <ConversationHead />
            <ConversationBody />
            <ConversationInput />
        </div>
    );
};

export { Conversation };
