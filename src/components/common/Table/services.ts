import { I_COLUMN, I_DATA } from "./types";

export function getKeyProperties (columns: I_COLUMN[]): string[] {
    const keyColumns = columns.filter(column => column.key);
    return keyColumns.map(keyColumn => keyColumn.name);
}

export function getDataKey (data: I_DATA, keyPropierties: string[]): string {
    if (keyPropierties.length === 0) {
        console.error('[Table]', 'Row doesn\'t have any key!');
    } else if (keyPropierties.length === 1) {
        return data[keyPropierties[0]];
    } else {
        const dataKeys = keyPropierties.map(property => data[property]);
        return dataKeys.join('_');
    }
}