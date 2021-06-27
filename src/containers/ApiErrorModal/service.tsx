import { API_ERROR_MSG, E_API_TYPE } from '@/constants/api.config';
import { AxiosError } from 'axios';

/**
 *  api 에러의 메세지를 가져온다.
 * @returns {Object} msg
 */
export function getApiErrorMsg(error: AxiosError) {
    const apiType = getApiType(error.config.url);
    const statusCode = error.response.status;
    const errorMsgObj = API_ERROR_MSG[apiType] || API_ERROR_MSG.else;

    const title = errorMsgObj.title;
    const message =
        errorMsgObj.statusMsg[statusCode] || '알 수 없는 에러입니다.';

    return {
        title,
        message,
    };

    function getApiType(url: string): E_API_TYPE {
        const urlParts = url.split('/');

        switch (urlParts[1]) {
            case 'githubs':
                return E_API_TYPE.github;
            default:
                return E_API_TYPE.default;
        }
    }
}
