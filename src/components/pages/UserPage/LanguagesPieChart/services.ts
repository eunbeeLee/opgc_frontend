export function getChartData (data: { language: E_LANGUAGE, number: number }[] = []) {
    const totalValue = data.reduce((ac, curVal) => ac + curVal.number, 0);

    return data.map(d => ({
        id: d.language,
        label: d.language,
        value: (d.number / totalValue * 100).toFixed(2),
    }))
}
