import { readFile, writeFile } from 'node:fs/promises';

const feature = process.argv[2];
const newNote = process.argv[3];

readFile('data.json', 'utf-8')
  .then((data) => {
    const dataParsed = JSON.parse(data);
    const notes = dataParsed.notes;
    const nextId = dataParsed.nextId;
    if (feature === 'read') {
      for (const id in notes) {
        console.log(`${id}: ${notes[id]}`);
      }
    } else if (feature === 'create') {
      notes[nextId] = newNote + '';
      dataParsed.nextId = nextId + 1;
      write(dataParsed);
    } else if (feature === 'update') {
      notes[newNote] = process.argv[4];
      write(dataParsed);
    } else if (feature === 'delete') {
      if (notes[newNote]) {
        delete notes[newNote];
        write(dataParsed);
      }
    }
  })
  .catch((err) => console.error(err.message));

function write(data) {
  return writeFile('data.json', JSON.stringify(data, null, 2), 'utf-8');
}
