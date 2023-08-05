import React from 'react';

import styles from '../../Chat.module.scss';

import { ContactsTopBar } from './ContactsTopBar';
import { ContactItemsList } from './ContactItemsList';

interface Props {}

const ContactsList: React.FC<Props> = () => {
    return (
        <div className={styles.contactsList}>
            <ContactsTopBar />

            <ContactItemsList />
        </div>
    );
};

export { ContactsList };
