module.exports = function(input) {
  let inputArr = input.split(' ');
  if (inputArr[0] === 'cat') {
    // console.log(inputArr);
    require('fs').readFile(inputArr[1], function(err, output) {
      if (err) { throw err; }
      else {
        return output;
      }
    });
  }
};
