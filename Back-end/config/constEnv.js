module.exports = {
    ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS || 'http://localhost:3000',

    PORT: process.env.PORT || 5000,
    CONNECT: process.env.CONNECT || 'mongodb://localhost:27017/Radency',

    NODE_ENV: process.env.NODE_ENV || 'dev',
}
