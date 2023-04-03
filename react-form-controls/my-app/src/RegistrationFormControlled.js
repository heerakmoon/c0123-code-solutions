import { useState } from 'react';

export default function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleUsername (event) {
    setUsername(event.target.value);
  }

  function handlePassword (event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('controlled username:', username, 'controlled password:', password);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
        type="text"
        onChange={handleUsername}></input>
      </label>
      <label>
        Password
        <input
        type="password"
        onChange={handlePassword}></input>
      </label>
      <button type="submit">Sign Up</button>
    </form>
  )
}
