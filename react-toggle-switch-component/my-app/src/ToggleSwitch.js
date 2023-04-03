import { useState } from "react";
import "./ToggleSwitch.css"

export default function ToggleSwitch () {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleClick () {
    setIsFlipped(!isFlipped);
  }

  const flip = isFlipped ? 'on' : 'off';
  const switchBackground = isFlipped ? 'rgb(65, 106, 186)' : 'rgb(175, 202, 255)'
  const switchSliderColor = isFlipped ? 'rgb(175, 202, 255)' : 'rgb(65, 106, 186)';

  return (
    <div>
      <div className="switch" onClick={handleClick} style={{ backgroundColor: switchBackground }}>
        <span className={`slider ${flip}`} style={{ backgroundColor: switchSliderColor}}></span>
      </div>
        <p>{flip}</p>
    </div>
  )
}
