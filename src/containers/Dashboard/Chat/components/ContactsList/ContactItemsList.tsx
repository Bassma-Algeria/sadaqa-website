import React from 'react';

import styles from '../../Chat.module.scss';

import { ContactItem } from './ContactItem';

interface Props {}

const ContactItemsList: React.FC<Props> = () => {
    return (
        <div className={styles.contactItemsList}>
            <ContactItem selected={true} />
            <ContactItem online haveUnreadMessage />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
        </div>
    );
};

export { ContactItemsList };
