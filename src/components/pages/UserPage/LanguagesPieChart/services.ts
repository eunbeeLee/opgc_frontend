import { I_LANGUAGE_DATA, I_CHART_DATA } from './types';

export function getChartData(data: I_LANGUAGE_DATA[] = []): I_CHART_DATA[] {
    const totalValue = data.reduce((ac, curVal) => ac + curVal.number, 0);

    return data.map((d) => ({
        id: d.language as string,
        label: d.language as string,
        value: ((d.number / totalValue) * 100).toFixed(2),
    }));
}
