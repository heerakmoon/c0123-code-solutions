import { useState } from 'react';

export default function HotButton({ text, color, fontColor, fontSize }) {
  const [isClicked, setIsClicked] = useState(0);
  console.log('useState', isClicked);

  function handleClick () {
    setIsClicked(isClicked + 1)
    console.log(isClicked)
  }

  if (isClicked <= 3) {
    color = 'rgb(53,28,117)'
    fontColor = 'white'
  } else if (isClicked <= 6) {
    color = 'rgb(103,78,167)'
    fontColor = 'white'
  } else if (isClicked <= 9) {
    color = 'rgb(224,102,102)'
    fontColor = 'white'
  } else if (isClicked <= 12) {
    color = 'rgb(246, 178, 107)'
  } else if (isClicked <= 15) {
    color = 'rgb(255,255,0)'
  } else {
    color = 'rgb(255,255,255)'
  }

  const buttonJSX = <button onClick={handleClick} style={{ backgroundColor: color, color: fontColor, fontSize: fontSize}}>{text}</button>
  return buttonJSX;
}
