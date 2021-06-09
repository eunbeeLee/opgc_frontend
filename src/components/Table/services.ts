import { I_COLUMN, I_DATA } from './types';

export function getKeyProperties(columns: I_COLUMN[]): string[] {
    const keyColumns = columns.filter((column) => column.key);
    return keyColumns.map((keyColumn) => keyColumn.name);
}

export function getDataKey(data: I_DATA, keyPropierties: string[]): string {
    if (keyPropierties.length === 0) {
        console.error('[Table]', "Row doesn't have any key!");
    } else if (keyPropierties.length === 1) {
        return data[keyPropierties[0]];
    } else {
        const dataKeys = keyPropierties.map((property) => data[property]);
        return dataKeys.join('_');
    }
}

export function getColumnsWidth(columns: I_COLUMN[]): string {
    let unsepcificColumnCnt = columns.length;
    const specificWidth = columns.reduce((acc, column) => {
        if (column.width) {
            unsepcificColumnCnt--;
            return acc + column.width;
        } else {
            return acc;
        }
    }, 0);

    return `calc((100% - ${specificWidth}) / ${unsepcificColumnCnt})`;
}
