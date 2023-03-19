import { readFile, writeFile } from 'node:fs/promises';

const fileToCopy = process.argv[2];
const duplicate = process.argv[3];

readFile(fileToCopy, 'utf-8')
  .then((data) => writeFile(duplicate, data))
  .catch((err) => console.error(err));
