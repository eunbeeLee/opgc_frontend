interface I_MENU {
    display: string;
    name: string;
    path: string;
    visible: boolean;
    component: React.FC<any>;
}

interface I_STYLE {
    [attribute: string]: string;
}