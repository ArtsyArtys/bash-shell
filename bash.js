const done = output => {
  if (output != undefined) {
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
  }
};

process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  let cmd = data.toString().trim();
  // process.stdout.write('You typed: ' + cmd);
  done(require('./pwd')(cmd));
  done(require('./ls')(cmd));
  done(require('./q')(cmd));
  done(require('./cat')(cmd));
  done(require('./curl')(cmd));
});
