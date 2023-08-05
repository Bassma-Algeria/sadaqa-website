import React from 'react';

import styles from './Chat.module.scss';

import { DashboardLayout } from '../../../components/Layout/DashboardLayout/DashboardLayout';

import { ContactsList } from './components/ContactsList/ContactsList';
import { Conversation } from './components/Conversation/Conversation';

interface Props {}

const Chat: React.FC<Props> = () => {
    return (
        <DashboardLayout>
            <div className={styles.container}>
                <ContactsList />
                <Conversation />
            </div>
        </DashboardLayout>
    );
};

export { Chat };
