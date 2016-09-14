const vorpal = require('vorpal')();

vorpal
  .command('test', 'Outputs "Test program functionality".')
  .action(function(args, callback) {
    this.log('Hello World!');
    callback();
  });

  vorpal
    .command('generate [string]', 'Outputs "outputs argument".')
    .action(function(args, callback) {
      this.log("You're entered input was: " + args.string);
      callback();
    });

vorpal
  .delimiter('>>>')
  .show();
