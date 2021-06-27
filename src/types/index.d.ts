/**
 * 앱 공용으로 사용하지만, 특정 도메인에 속하지 않는 타입들
 */
interface I_MENU {
    label: string;
    name: string;
    path: string;
    visible: boolean;
}

interface I_ROUTE {
    name: string;
    path: string;
    component: React.FC<any> | React.NamedExoticComponent<any>;
    children?: I_ROUTE[];
}

interface I_STYLE {
    [attribute: string]: string;
}

interface I_MEMBER {
    name: string;
    desc: string;
    position: string;
    imgUrl?: string;
    link?: string;
}

interface I_PAGE<T> {
    nextPageCursor: string;
    prevPageCursor: string;
    data: T;
}

interface I_API_ERROR_MSG {
    [apiType: string]: {
        title: string;
        statusMsg: {
            [statusCode: string]: string;
        };
    };
}
