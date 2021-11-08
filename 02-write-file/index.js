const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;

stdout.write('Hello. type message below, please\n');

if (process.platform === 'win32') {
  process.on('SIGINT', () => {
    stdout.write('Thanks. Bye!');
    process.exit();
  });
} else {
  process.on('exit', () => {
    stdout.write('Thanks. Bye!');
    process.exit();
  });
}

stdin.on('data', data => {
  const value = data.toString();
  if(value.includes('exit')) {
    stdout.write('Thanks. Bye!');
    process.exit();
  } else {
    fs.appendFile(path.join(__dirname, 'console.txt'), value, function(error){
      if(error) throw error;
    });
  }  
});