module.exports = function(input) {
  if (input === 'pwd') {
    return process.cwd() + '\n';
  }
};
