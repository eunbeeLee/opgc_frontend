import { ReactElement } from "react";

export interface I_COLUMN {
    display: string;
    name: string;
    render?: (data: any) => ReactElement;
    key?: boolean;
}

export interface I_DATA {
    [key: string]: any;
}