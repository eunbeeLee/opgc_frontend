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
            '403':
                '[⚠️ RATE_LIMIT] 검색한 유저는 큐에 저장되었습니다.\n ' +
                'Github API 호출이 가능한 시점이 되면 유저정보를 생성하거나 업데이트 합니다!\n' +
                '내일 다시 들어오면 보실수 있을거에요!😄',
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
