export const SERVER_HOST = 'https://opgc.5boon.me';
export const TIMEOUT = 60000;

export enum E_API_TYPE {
    github = 'githubs', // github open api 관련
    opgc = 'opgc', // opgc 고유 api 관련
    default = 'else', // 나머지
}

export const API_ERROR_MSG: I_API_ERROR_MSG = {
    githubs: {
        title: 'Github API 에러',
        statusMsg: {
            '404': 'API를 찾을 수 없습니다.',
            '403': '요청 횟수 초과입니다. 내일 다시 시도해주세요',
        },
    },
    ranks: {
        title: 'OPGC API 에러',
        statusMsg: {
            '404': 'API를 찾을 수 없습니다.',
        },
    },
    else: {
        title: 'API 에러',
        statusMsg: {
            '404': 'API를 찾을 수 없습니다.',
        },
    },
};
