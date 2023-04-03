import { useState } from 'react';

export default function ValidateInput() {
  const [input, setInput] = useState('');

  function handleOnChange(e) {
    setInput(e.target.value)
  }

  const check = input.length < 8;
  const icon = check ? 'bi bi-x' : 'bi bi-check';
  const color = check ? 'red' : 'green';
  let text;

  if (input.length === 0) {
    text = 'A password is required';
  } else if (input.length < 8) {
    text = 'Your password is too short';
  }

  return (
  <div>
    <div>
      <label>
        <div>
        Password
        </div>
        <input
        onChange={handleOnChange}
        checked
        value={input}>
        </input>
        <i className={icon} style={{ color, fontSize: '35px' }}></i>
      </label>
    </div>
    <p style={{ color }}>{text}</p>
  </div>
  )
}
