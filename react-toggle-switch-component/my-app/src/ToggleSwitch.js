import { useState } from "react";

export default function ToggleSwitch ({toggleColor}) {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleClick () {
    setIsFlipped(!setIsFlipped);
  }

  const switchColor = isFlipped ? 'rgb(106, 168, 79)' : 'rgb(226, 226, 226)'
  return (
    <label className="switch" onClick={handleClick} style={{ backgroundColor: switchColor }}>
      <input type="checkbox" onClick={handleClick}>
      <span className="slider round"></span>
      </input>
    </label>
  )
}
