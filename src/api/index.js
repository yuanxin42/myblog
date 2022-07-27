import fetchs from 'fetch-s';
import { Message } from 'element-ui';

const NODE_ENV = process.env.NODE_ENV;
const HOST =
    NODE_ENV === 'development'
        ? '//hapi.58corp.com/mock'
        : '//tzjobwechat-admin.58corp.com';

const http = fetchs.create({
    origin: HOST,
    credentials: 'include',
    timeout: 8000
});

// 添加一个请求拦截器
http.interceptors.request.use(
    function (config) {
        // 部分请求（如：上传图片，timeout时间要长一点，做法是直接在header加标识，真实请求发出前删掉）
        const { headers = {} } = config;
        if (headers && headers.ajaxTimeOut) {
            const timeout = headers.ajaxTimeOut;
            delete config.headers.ajaxTimeOut;
            return {
                ...config,
                timeout
            };
        }
        return config;
    },
    function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加一个响应拦截器
http.interceptors.response.use(
    function (response) {
        const data = response.data;
        if (data?.code !== 0) {
            Message.error(data?.message || '网络错误，请稍后在试~');
        }
        return data;
    },
    function (error) {
        Message.error('网络错误，请稍后在试~');
        return Promise.reject(error);
    }
);

console.log(NODE_ENV, 'NODE_ENV');

/**
 * 请求
 *
 * @param {string} method
 */
function apiRequest(url, data, headers = {}, method = 'get') {
    if (method === 'get') {
        return http.get(url, { data, headers });
    } else if (method === 'post') {
        return http.post(url, data, { headers });
    }
}

// get请求方法
export function get(url, data = {}, headers = {}) {
    return apiRequest(url, data, headers);
}

// post请求方法
export function post(url, data = {}, headers = {}) {
    return apiRequest(url, data, headers, 'post');
}
