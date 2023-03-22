import express from 'express';
const port = 8080;

const app = express();
const notes = [
  {
    content: 'hi',
    id: 2
  }
];
const badReq = {
  error: 'id must be positive integer'
};

app.use(express.json());

app.get('/api/notes', (req, res) => {
  res.status(200).json(notes);
});

app.get('/api/notes/:id', (req, res) => {
  console.log(req.params.id);
  if (req.params.id < 0) {
    res.status(400).json(badReq);
  } else if (req.params.id) {
    let targetId;
    for (const note in notes) {
      if (note.id === req.params.id) {
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
