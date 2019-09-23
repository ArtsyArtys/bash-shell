let request = require('request');

module.exports = function (input)
{
  let inputArr = input.split(' ');
  if (inputArr[0] === 'curl') {
    request(inputArr[1], function(err, response, html) {
      if (err) { throw err; }
      else if (response.statusCode === 200) {
        return html;
      }
    });
  }
};
