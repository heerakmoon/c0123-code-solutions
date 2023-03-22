import express from 'express';

const app = express();
const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.get('/api/grades', (req, res) => {
  const gradesArr = [];
  for (const studentId in grades) {
    gradesArr.push(grades[studentId]);
  }
  res.json(gradesArr);
});

app.delete('/api/grades/:id', (req, res) => {
  console.log(req.params.id);
  if (grades[req.params.id]) {
    delete grades[req.params.id];
    res.sendStatus(200);
  } else {
    res.sendStatus(400);
  }
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
