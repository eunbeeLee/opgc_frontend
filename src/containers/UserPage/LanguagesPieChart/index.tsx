import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import './style.css';
import { getChartData } from './services';
import { LEGEND_PROPS } from './constants';

interface I_PROPS {
    data: { language: E_LANGUAGE; number: number }[];
}

const LanguagesPieChart: React.FC<I_PROPS> = ({ data }) => {
    const chartData = React.useMemo(() => getChartData(data), [data]);

    return (
        <div className="user-info__languages-pie-chart">
            <ResponsivePie
                data={chartData}
                margin={{ top: 40, right: 200, bottom: 40, left: 200 }}
                innerRadius={0.3}
                padAngle={0.7}
                cornerRadius={3}
                valueFormat={(v) => `${v}%`}
                borderWidth={1}
                colors={{ scheme: 'pastel1' }}
                borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                radialLabelsSkipAngle={10}
                radialLabelsTextColor="#333333"
                radialLabelsLinkColor={{ from: 'color' }}
                sliceLabelsSkipAngle={10}
                sliceLabelsTextColor="#333333"
                legends={[{ ...LEGEND_PROPS }]}
            />
        </div>
    );
};

export default React.memo(LanguagesPieChart);
