import axios from 'axios';
// import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

export const $api = axios.create({
    baseURL: '/api',
    // headers: {
    //     authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
    // },
    headers: {
        'X-CSRFToken': window!.csrfToken || '',
    },
});

$api.interceptors.response.use(
    (response) => {
        // console.log('📥 Axios Response:', {
        //     url: response.config.url,
        //     method: response.config.method?.toUpperCase(),
        //     status: response.status,
        //     data: response.data,
        //     headers: response.headers,
        // });
        return response;
    },
    (error) => {
        console.log('❌ Axios Error:', {
            url: error.config?.url,
            method: error.config?.method?.toUpperCase(),
            status: error.response?.status,
            data: error.response?.data,
            detail: error.response?.data.detail,
            message: error.message,
        });

        // Check for "Incorrect Token Format" error
        const errorDetail = error.response?.data?.detail;
        if (
            errorDetail === 'Incorrect Token Format'
            || errorDetail === 'Token Absent in json token'
        ) {
            // console.log('🔄 Token error detected, reloading page...');
            window.location.reload();
        }

        return Promise.reject(error);
    },
);

$api.interceptors.request.use((config) => {
    // if (config.headers) {
    //     config.headers.authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
    // }
    if (config.headers) {
        config.headers['X-CSRFToken'] = window!.csrfToken || '';
    }
    return config;
});
