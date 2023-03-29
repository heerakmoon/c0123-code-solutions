import { useState } from 'react';

export default function ToggleButton({text, color, onClick}) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    console.log('Button clicked:', isClicked);
    setIsClicked(!isClicked);
  }

  if (isClicked) {
    return <button style={{ backgroundColor: color }} onClick={handleClick}>{text}</button>
  } else {
    return <button style={{ backgroundColor: 'white' }} onClick={handleClick}>{text}</button>
  }
}
