import React from 'react';

import { Greeting } from './components/Greeting';

import { EmptyState } from './components/EmptyState';

import { DashboardLayout } from '../../../components/Layout/DashboardLayout/DashboardLayout';

interface Props {}

const Statistics: React.FC<Props> = () => {
    return (
        <DashboardLayout>
            <div className="min-h-full overflow-y-scroll bg-gray1 pt-6">
                <div className="mx-auto lg:container xl:container">
                    <Greeting />

                    <EmptyState />
                </div>
            </div>
        </DashboardLayout>
    );
};

export { Statistics };
