import React, { useState } from 'react';
import { ResponsiveCirclePacking } from '@nivo/circle-packing';

interface I_PROPS {
    data: any;
}

const CircleChart: React.FC<I_PROPS> = ({ data }) => {
    const [zoomedId, setZoomedId] = useState<string | null>(null);

    return (
        <ResponsiveCirclePacking
            data={data}
            margin={{ top: 20, right: 0, bottom: 0, left: 0 }}
            id="name"
            value="value"
            colors={{ scheme: 'pastel1' }}
            colorBy="id"
            childColor={{
                from: 'color',
                modifiers: [['brighter', 0.4]],
            }}
            padding={1}
            leavesOnly={true}
            enableLabels={true}
            label="id"
            labelTextColor={{
                from: 'color',
                modifiers: [['darker', 2.4]],
            }}
            borderColor={{
                from: 'color',
                modifiers: [['darker', 0.3]],
            }}
            zoomedId={zoomedId}
            onClick={(node) => {
                setZoomedId(zoomedId === node.id ? null : node.id);
            }}
            motionConfig="slow"
        />
    );
};

export default React.memo(CircleChart);
