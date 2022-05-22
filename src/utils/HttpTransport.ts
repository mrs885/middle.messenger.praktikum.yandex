const METHODS = {
    GET: 'GET',
    POST:'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
};

type Options = {
    headers?: object,
    data?: object,
    method?: string,
    timeout?: number,
}

/**
* На входе: объект. Пример: {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
* На выходе: строка. Пример: ?a=1&b=2&c=[object Object]&k=1,2,3
*/
function queryStringify(data: any) {
    if(!data) return '';
    // Можно делать трансформацию GET-параметров в отдельной функции
    let dataArr = [];
    let result = '';
    for(let key of Object.keys(data)){
        if(Array.isArray(data[key]))
            result = `${key}=${data[key].join(',')}`;
        else if (typeof data[key] == 'object')
            result = `${key}=[object Object]`;
        else 
            result = `${key}=${data[key]}`;
        dataArr.push(result);
    }
    return `?${dataArr.join('&')}`;
}

export class HTTPTransport {
    get = (url: string, options: Options = {}) => {
        let data = undefined;
        if (options.data)
            data = queryStringify(options.data)
        return this.request(url, {...options, method: METHODS.GET, data: data}, options.timeout);
    };

    put = (url: string, options: any = {}) => {
             
        return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
    };
    
    post = (url: string, options: any = {}) => {
             
        return this.request(url, {...options, method: METHODS.POST}, options.timeout);
    };
    
    delete = (url: string, options: any = {}) => {
             
        return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
    };

    request(url: string, options: Options, timeout: number = 5000): Promise<XMLHttpRequest>{
        const {method, data, headers} = options;
    
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            if (options.method !== "GET") 
                xhr.open(options.method, url)
            else 
                xhr.open(options.method, url + data);

            if(headers) 
                Object.keys(headers).forEach((key) => {
                    xhr.setRequestHeader(key, headers[key]);
                });
            
            xhr.onload = function() {
                resolve(xhr);
            }
      
            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;

            xhr.timeout = timeout;
            
            if (method === METHODS.GET || !data) {
                xhr.send();
            } else {
                xhr.send(JSON.stringify(data));
            }
        });
    }
}