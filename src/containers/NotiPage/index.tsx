import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import NotiCard from '@/components/NotiCard';

interface I_PROPS {}

const NotiPage: React.FC<I_PROPS> = () => {
    const notis = [
        { date: '123122', title: 'asdfasdf', content: 'asdfasdfsadf' },
        { date: '123123', title: 'asdfasdf12', content: 'asdfasdfsadf2' },
        { date: '123124', title: 'asdfasdf23', content: 'asdfasdfsadf3' },
        { date: '123125', title: 'asdfasdf231', content: 'asdfasdfsadf4' },
    ];

    return (
        <MainLayout>
            <div>
                {notis.map((noti) => (
                    <NotiCard title={noti.title} content={noti.content} />
                ))}
            </div>
        </MainLayout>
    );
};

export default React.memo(NotiPage);
