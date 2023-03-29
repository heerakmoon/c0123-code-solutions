import { useState } from 'react';

export default function ToggleButton({text, color}) {
  const [isClicked, setIsClicked] = useState(false);
  console.log('Value returned by useState:', isClicked)

  function handleClick() {
    console.log('Value before calling setter:', isClicked);
    setIsClicked(!isClicked);
    console.log('Value after calling setter:', isClicked);
  }

  const bgColor = isClicked ? color : 'white';
  return <button style={{ backgroundColor: bgColor }} onClick={handleClick}>{text}</button>
}
