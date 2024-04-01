const baseUrl = process.env.TMBD_BASE_URL;
const key = process.env.TMBD_KEY;

const  getUrl = (endpoint, params)  => {
    const qs = new URLSearchParams(params);

    return `${baseUrl}${endpoint}?${qs}`;
}

export default { getUrl };
