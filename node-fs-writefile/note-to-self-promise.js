import { writeFile } from 'node:fs/promises';

writeFile('note.txt', process.argv[2] + '\n', 'utf-8')
  .catch((err) => console.error(err));
