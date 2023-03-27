import express from 'express';
import { readFileSync, writeFile } from 'node:fs';
const port = 8080;

const readData = () => {
  const dataJSON = JSON.parse(readFileSync('data.json', 'utf-8'));
  return dataJSON;
};
const notesArr = [];
const notesObj = readData();
for (const note in notesObj.notes) {
  notesArr.push(notesObj.notes[note]);
}
console.log(notesObj.nextId);
const app = express();

app.use(express.json());

app.get('/api/notes', (req, res) => {
  res.status(200).json(notesArr);
});

app.get('/api/notes/:id', (req, res) => {
  const reqToNum = Number(req.params.id);
  if (isNaN(reqToNum) || reqToNum < 0) {
    return res.status(400).json({ error: 'id must be positive integer' });
  } else {
    let targetId;
    for (const note in notesArr) {
      targetId = notesArr[note];
      if (targetId.id === reqToNum) {
        res.status(200).json(targetId);
      } else {
        return res.status(404).json({ error: `error: cannot find note with id ${req.params.id}` });
      }
    }
  }
});

app.post('/api/notes', (req, res) => {
  if (!('content' in req.body) || !req.body.content) {
    return res.status(400).json({ error: 'content is a required field' });
  }
  const nextNotesId = notesObj.nextId;
  const newNote = {
    id: nextNotesId,
    content: req.body.content
  };
  notesObj.nextId++;
  notesObj.notes[nextNotesId] = newNote;
  writeFile('data.json', JSON.stringify(notesObj, null, 2), 'utf-8', (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'An unexpected error occurred.' });
    }
    res.status(201).json(newNote);
  });
});

app.listen(port, () => console.log(`Express server listening on port ${port}`));
