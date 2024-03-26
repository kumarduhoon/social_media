export const server = {
    baseUrl: 'https://api.freeapi.app/api/v1'
}

const baseUrl = () => {
    if (process.env.REACT_APP_URL === 'prod') {
        return server.prod
    } else {
        return server.baseUrl
    }
}

export default baseUrl;