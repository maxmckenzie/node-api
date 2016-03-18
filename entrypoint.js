if (process.env.NODE_ENV === 'production') {
  require('./dist/index');
} else {
  require('babel-register');
  require('./app/index');
}
