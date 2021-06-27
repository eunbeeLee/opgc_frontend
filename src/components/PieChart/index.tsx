import React from 'react';
import { LEGEND_PROPS } from './constants';
import { ResponsivePie } from '@nivo/pie';

interface I_PROPS {
    data: any[];
}

const CircleChart: React.FC<I_PROPS> = ({ data }) => {
    return (
        <ResponsivePie
            data={data}
            margin={{ top: 40, right: 200, bottom: 40, left: 200 }}
            innerRadius={0.3}
            padAngle={0.7}
            cornerRadius={3}
            valueFormat={(v) => `${v}%`}
            borderWidth={1}
            colors={{ scheme: 'pastel1' }}
            borderColor={{
                from: 'color',
                modifiers: [['darker', 0.2]],
            }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor="#333333"
            arcLinkLabelsColor={{ from: 'color' }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            legends={[{ ...LEGEND_PROPS }]}
        />
    );
};

export default React.memo(CircleChart);
