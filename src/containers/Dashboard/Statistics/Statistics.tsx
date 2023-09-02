import React from 'react';

import { Greeting } from './components/Greeting';

import { DashboardLayout } from '../../../components/Layout/DashboardLayout/DashboardLayout';

interface Props {}

const Statistics: React.FC<Props> = () => {
    return (
        <DashboardLayout>
            <div className={'min-h-full w-full overflow-y-scroll bg-gray1'}>
                <div className="mx-auto lg:container xl:container">
                    <Greeting />
                </div>
            </div>
        </DashboardLayout>
    );
};

export { Statistics };
