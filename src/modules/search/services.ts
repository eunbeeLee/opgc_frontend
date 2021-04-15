export const getList = (key: string): string[] => {
    try {
        const data: string = localStorage.getItem(key);
        const result: string[] = JSON.parse(data);

        return result instanceof Array ? result : [];
    } catch (e) {
        console.warn(e);
        return [];
    }
};
