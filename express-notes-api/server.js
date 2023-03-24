import express from 'express';
import { readFileSync } from 'node:fs';
const port = 8080;

const readData = () => {
  const dataJSON = JSON.parse(readFileSync('data.json', 'utf-8'));
  return dataJSON;
};
const notes = [];
const app = express();

const badReq = {
  error: 'id must be positive integer'
};

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const notesObj = readData();
  for (const note in notesObj.notes) {
    notes.push(notesObj.notes[note]);
  }
  res.status(200).json(notes);
});

app.get('/api/notes/:id', (req, res) => {
  console.log(req.params.id);
  if (req.params.id < 0) {
    res.status(400).json(badReq);
  } else if (req.params.id > 0) {
    let targetId;
    for (const note in notes) {
      if (note === req.params.id) {
        targetId = note.id;
        req.status(200).json(targetId);
        console.log(targetId);
      } else {
        // req.status(404).json()
      }
    }
  }
});

app.listen(port, () => console.log(`Express server listening on port ${port}`));
