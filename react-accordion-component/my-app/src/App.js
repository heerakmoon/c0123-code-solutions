import './App.css';
import Accordion from './Accordion';

function App() {
  // const topics = [
  //   {
  //     topic: 'Hypertext Markup Language',
  //     details: 'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.',
  //   },
  //   {
  //     topic: 'Cascading Style Sheets',
  //     details: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web alongside HTML and JavaScript.',
  //   },
  //   {
  //     topic: 'JavaScript',
  //     details: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.',
  //   }
  // ]

  return (
    <div className="App">
      <Accordion />
    </div>
  );
}

export default App;