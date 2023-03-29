import { useState } from 'react';

export default function ToggleButton({text, color, onClick}) {
  const [isClicked, setIsClicked] = useState(false);
  console.log('Value returned by useState:', isClicked)

  function handleClick() {
    console.log('Value before calling setter:', isClicked);
    setIsClicked(!isClicked);
    console.log('Value after calling setter:', isClicked);
  }
  if (!handleClick) {
    return <button style={{ backgroundColor: color }} onClick={handleClick}>{text}</button>
  } else {
    return <button style={{ backgroundColor: 'white' }} onClick={handleClick}>{text}</button>
  }

}
