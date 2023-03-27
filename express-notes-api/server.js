import express from 'express';
import { readFileSync } from 'node:fs';
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
const app = express();

app.use(express.json());

app.get('/api/notes', (req, res) => {
  res.status(200).json(notesArr);
});

app.get('/api/notes/:id', (req, res) => {
  const reqToNum = Number(req.params.id);
  if (isNaN(reqToNum) || reqToNum < 0) {
    res.status(400).json({ error: 'id must be positive integer' });
  } else {
    let targetId;
    for (const note in notesArr) {
      targetId = notesArr[note];
      if (targetId.id === reqToNum) {
        res.status(200).json(targetId);
      } else {
        res.status(404).json({ error: `error: cannot find note with id ${req.params.id}` });
      }
    }
  }
});

app.listen(port, () => console.log(`Express server listening on port ${port}`));
