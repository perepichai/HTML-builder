const fs = require('fs');
const path = require('path');
const { stdout } = process;
const rr = fs.createReadStream(path.join(__dirname, 'text.txt'));
rr.on('readable', () => {
  stdout.write(`${rr.read()}`);
});