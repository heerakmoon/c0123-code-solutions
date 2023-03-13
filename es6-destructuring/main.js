const book1 = {
  title: 'Goodnight Punpun',
  author: 'Inio Asano',
  libraryID: 3353
};

const { title = 'Goodnight Punpun' } = book1;
const { author = 'Inion Asano' } = book1;
const { libraryID = 3353 } = book1;

console.log('The title of the book is ' + title + ', the author is ' + author + ', and the library id is ' + libraryID);

const book2 = {
  title: 'Les Fleurs du mal',
  author: 'Charles Baudelaire',
  libraryID: 2345
};

const { title: book2Title } = book2;
const { author: book2Author } = book2;
const { libraryID: book2ID } = book2;

console.log('The title of the book is ' + book2Title + ', the author is ' + book2Author + ', and the library id is ' + book2ID);
