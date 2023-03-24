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

const note = notesArr[0].id; // delete later
console.log(note);

app.use(express.json());

app.get('/api/notes', (req, res) => {
  res.status(200).json(notesArr);
});

app.get('/api/notes/:id', (req, res) => {
  const reqToNum = Number(req.params.id);
  if (reqToNum < 0) {
    res.status(400).json({ error: 'id must be positive integer' });
  } else if (reqToNum > 0) {
    let targetId;
    for (const note in notesArr) {
      targetId = notesArr[note];
      if (targetId.id === reqToNum) {
        res.status(200).json(targetId);
      } else {
        // req.status(404).json()
      }
    }
  }
});

app.listen(port, () => console.log(`Express server listening on port ${port}`));
