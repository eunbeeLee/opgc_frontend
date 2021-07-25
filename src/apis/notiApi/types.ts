export interface I_API_GET_NOTIS_RES {
    next: string | null;
    previous: string | null;
    results: {
        content: string;
        created: string;
        id: number;
        title: string;
        updated: string;
    }[];
}
