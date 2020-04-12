module.exports = {
    outputDir: __dirname + '/../server/static/admin',
    publicPath: process.env.NODE_ENV === 'production' ? '/admin' : '/'
}