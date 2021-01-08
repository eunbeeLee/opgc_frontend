import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { SERVER, TIMEOUT } from '@/constants/api.config';

interface IRequestParamsData {
    params?: any;
    data?: any;
}

axios.defaults.baseURL = SERVER;
axios.defaults.timeout = TIMEOUT;

axios.interceptors.request.use(
    config => {
        logRequest(config);
        return config;
    },
    error => {
        logRequestError(error);
        throw error;
    }
);

axios.interceptors.response.use(
    res => {
        logResponse(res);
        return res;
    },
    error => {
        logResponseError(error);
        throw error;
    }
);

function getTag (tagName: string, color: string, bgColor: string): string[] {
    return [
        `%c${tagName}`,
        `color:${color};background-color:${bgColor};border-radius:4px;line-height:1;padding:${tagName.length === 3
        ? '3px 10px 2px 9px'
        : '3px 6px 2px'}`,
    ];
}

function logRequest (config: AxiosRequestConfig): void {
    console.info(
    ...getTag('REQ', 'white', 'blue'),
    ...getRequestParamsData(config),
    );
}
  
function logResponse (response: AxiosResponse): void {
    console.info(
    ...getTag('SUCC', 'white', 'green'),
    ...getRequestParamsData(response.config, response.status)
    );
}
  
function logRequestError (error: AxiosError): void {
    if (!axios.isCancel(error)) {
    // invalidated
    console.info(...getTag('INV', 'black', 'yellow'), error);
    }
}

function logResponseError (error: AxiosError): void {
    if (!axios.isCancel(error)) {
        // errored
        console.info(...getTag('ERR', 'black', 'red'), error);
    }
}


function getRequestParamsData (config: AxiosRequestConfig, responseStatus: number = 0): Array<IRequestParamsData | string | undefined> {
    if (config) {
      const requestParamsData: IRequestParamsData = {};
      const status: string = responseStatus > 0 && Math.floor(responseStatus / 100) !== 2 ? `(${responseStatus}) ` : '';
      const configUrl = config.url ?? '';
      const url: string = configUrl.startsWith('http') || configUrl.startsWith('//')
        ? configUrl
        : `${config.baseURL || ''}${config.url}`;
      let isEmpty = true;
  
      if (config.data) {
        requestParamsData.data = config.data;
        isEmpty = false;
      }
      if (config.params) {
        requestParamsData.params = config.params;
        isEmpty = false;
      }
  
      return [
        `${status}${String(config.method ?? 'GET').toUpperCase()} ${url}`,
        isEmpty ? undefined : requestParamsData,
      ].filter(Boolean);
    }
    return [];
  }
  
  
export default axios;