// import { useState } from 'react';

export default function Accordion({ topics }) {
  // const [topics, setTopics] = useState // give topics different name
  return(
    <>
      <Topics />
    </>
  )
}

function Topics({ topic, details }) {
  return(
    <>
      <h2>{topic}</h2>
      <p>{details}</p>
    </>
  )
}
