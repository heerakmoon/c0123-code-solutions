import { writeFile } from 'node:fs';

const data = Math.random();

writeFile('random.txt', data + '\n', 'utf-8', (error) => {
  if (error) throw error;
});
