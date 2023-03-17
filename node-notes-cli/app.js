import { readFile } from 'node:fs/promises';

const feature = process.argv[2];

if (feature === 'read') {
  readFile('data.json', 'utf-8')
    .then((data) => {
      const dataParsed = JSON.parse(data);
      const notes = dataParsed.notes;
      for (const id in notes) {
        console.log(`${id}: ${notes[id]}`);
      }
    })
    .catch((err) => console.log(err.message));
}
