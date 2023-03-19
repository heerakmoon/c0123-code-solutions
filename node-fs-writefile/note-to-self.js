import { writeFile } from 'node:fs';

writeFile('note.txt', process.argv[2] + '\n', 'utf-8', (error) => {
  if (error) throw error;
});
