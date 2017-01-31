module.exports = function (app, callback) {
  require('./article.routes')(app) // configure our routes

  callback()
}
