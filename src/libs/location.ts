 /**
  * queryString 을 추가한다.
  * @param params 
  * @param url 
  * @return {string} - queryString이 추가된 url
  */
export function addQueryStr (params: { [key: string]: string | number }, url?: string): string {
    url = url ?? location.href;
    const keys = Object.keys(params);
    let result = '';
  
    if (keys.length === 0) { return result; }
  
    const hasQueryStr = getQueryStr(url).length > 0;
  
    keys.forEach((key, idx) => {
      result += (hasQueryStr || idx > 0) ? '&' : '?';
      result += `${key}=${params[key]}`;
    });
  
    return result;
}

/**
 * url로부터 쿼리스트링 얻어오기
 * @param url
 * @return {string}
 */
export function getQueryStr (url?: string): string {
    const queryStr = (url) ? url.split('?')[1] : location.search;
    return queryStr || '';
  }

/**
 * url로부터 쿼리스트링 파라미터값 value 값 얻어오기
 * @param key 
 * @return {string}
 */
export function getQueryStrValue (key: string): string {
    const totalQueryStr = window.location.search?.substring(1, window.location.search.length);
    if (totalQueryStr) {
      const queryStrArr = totalQueryStr.split('&');
      const queryStrsObj = {};
  
      queryStrArr.forEach((queryStr) => {
        const queryStrKeyValArr = queryStr.split('=');
        const [key, value] = queryStrKeyValArr;
        queryStrsObj[key] = value;
      });
  
      return queryStrsObj[key];
    }
    return '';
  }