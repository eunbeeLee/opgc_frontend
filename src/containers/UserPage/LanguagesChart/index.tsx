import React from 'react';
import './style.css';

import CircleChart from '@/components/CircleChart';
import PieChart from '@/components/PieChart';
import { getCircleChartData, getPieChartData } from './services';

interface I_PROPS {
    data: { language: E_LANGUAGE; number: number }[];
}

const LanguagesPieChart: React.FC<I_PROPS> = ({ data }) => {
    return (
        <div>
            <div className="user-info__languages-chart pc-only">
                <PieChart data={getPieChartData(data)} />
            </div>
            <div className="user-info__languages-chart mobile-only">
                <CircleChart data={getCircleChartData(data)} />
            </div>
        </div>
    );
};

export default React.memo(LanguagesPieChart);
