module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/herb-renewal/dist/'
        : '/',
    devServer: {
        port:9000
    }
};