import { I_LANGUAGE_DATA, I_CHART_DATA } from './types';

export function getPieChartData(data: I_LANGUAGE_DATA[] = []): I_CHART_DATA[] {
    const totalValue = data.reduce((ac, curVal) => ac + curVal.number, 0);

    return data.map((d) => ({
        id: d.language as string,
        label: d.language as string,
        value: ((d.number / totalValue) * 100).toFixed(2),
    }));
}

export function getCircleChartData(
    data: I_LANGUAGE_DATA[] = []
): { name: string; children: I_CHART_DATA[] } {
    const totalValue = data.reduce((ac, curVal) => ac + curVal.number, 0);

    return {
        name: 'root',
        children: data.map((d) => ({
            id: d.language as string,
            name: d.language as string,
            value: ((d.number / totalValue) * 100).toFixed(2),
        })),
    };
}
