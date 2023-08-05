import React from 'react';

import styles from './DashboardLayout.module.scss';

interface Props {}

const DashboardLayout: React.FC<React.PropsWithChildren<Props>> = ({ children }) => {
    return (
        <div className={styles.container}>
            <main className={styles.content}>{children}</main>
        </div>
    );
};

export { DashboardLayout };
