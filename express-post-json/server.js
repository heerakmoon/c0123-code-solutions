import express from 'express';
const port = 8080;

const app = express();
let nextId = 1;
const grades = {};

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const gradesArr = [];
  for (const id in grades) {
    gradesArr.push(grades[id]);
  }
  res.json(gradesArr);
});

app.post('/api/grades', (req, res) => {
  const student = req.body;
  const id = nextId++;
  student.id = id;
  grades[id] = student;
  res.status(201).json(student);
});

app.listen(port, () => console.log(`Express server listening on port ${port}`));
