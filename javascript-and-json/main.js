var books = [
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    isbn: '0000'
  },
  {
    title: 'The Adventures of Tom Sawyer',
    author: 'Mark Twain',
    isbn: '0123'
  },
  {
    title: 'Frankenstein',
    author: 'Mary Shelley',
    isbn: '0101'
  }
];

console.log('books array:', books);
console.log('typeof books:', typeof books);

var booksStringify = JSON.stringify(books);

console.log('booksStringify array:', booksStringify);
console.log('typeof booksStringify:', typeof booksStringify);

var student = '{"id": "22", "name": "Jason"}';

console.log('student string:', student);
console.log('typeof student:', typeof student);
