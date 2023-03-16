import fs from 'node:fs/promises';

fs.readFile(process.argv[2], 'utf8')
  .then((contents) => console.log(contents))
  .catch((err) => console.log(err.message));
