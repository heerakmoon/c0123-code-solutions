import fs from 'node:fs/promises';

fs.readFile('dijkstra.txt', 'utf8')
  .then((contents) => console.log(contents))
  .catch((err) => console.log(err.message));
