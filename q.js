// let nodemon = require('nodemon');
module.exports = function(input) {
  if (input === 'q') {
    // nodemon.once('exit', process.exit).emit('quit');
    process.exit();
  }
};
