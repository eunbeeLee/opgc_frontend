import ErrorLayout from '@/components/layouts/ErrorLayout';
import React from 'react';

interface I_PROPS {}

const NotFoundPage: React.FC<I_PROPS> = () => {
    return <ErrorLayout>페이지를 찾을 수 없습니다.</ErrorLayout>;
};

export default React.memo(NotFoundPage);
