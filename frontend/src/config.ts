const getApiUrl = () => {
    let url = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8080';
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    return url;
};

export const API_BASE_URL = getApiUrl();
console.log('GridSync API URL:', API_BASE_URL);
