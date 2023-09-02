import React from 'react';

interface Props {}

const DashboardLayout: React.FC<React.PropsWithChildren<Props>> = ({ children }) => {
    return (
        <div className={'h-screen w-screen'}>
            <main className={'h-full w-full'}>{children}</main>
        </div>
    );
};

export { DashboardLayout };
