import fs from 'node:fs/promises';

const data = Math.random();

fs.writeFile('random.txt', data + '\n', 'utf-8')
  .catch((err) => console.error(err));
