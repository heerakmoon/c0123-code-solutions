import fs from 'node:fs/promises';

const files = process.argv.slice(2);
const promises = files.map((file) => fs.readFile(file, 'utf-8'));

Promise.all(promises)
  .then((data) => console.log(data.join('\n')))
  .catch((err) => console.error(err));
