import express from 'express';
const port = 8080;

const app = express();
const notes = [];

app.use(express.json());

app.get('/api/notes', (req, res) => {
  res.status(200).json(notes);
});

app.listen(port, () => console.log(`Express server listening on port ${port}`));
