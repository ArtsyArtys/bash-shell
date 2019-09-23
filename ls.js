const fs = require('fs');
module.exports = function(input) {
  if (input === 'ls') {
    let fileNames = '';
    fs.readdir('./', 'utf8', (err, files) => {
      if (err) { throw err; }
      else {
        fileNames = files.join('\n') + '\n';
        console.log(fileNames);
      }
    });
    console.log('ran after readdir');
    return fileNames;
  }
};
