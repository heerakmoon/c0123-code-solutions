import express from 'express';

const app = express();
// const nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const gradesArr = [];
  for (const id in grades) {
    gradesArr.push(grades[id]);
  }
  res.json(gradesArr);
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
