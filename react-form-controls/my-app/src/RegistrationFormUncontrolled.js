export default function RegistrationFormUncontrolled() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData =  new FormData(event.target);
    const formObj = Object.fromEntries(formData.entries());
    console.log('uncontrolled form:', formObj);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
        type="text"
        name="username"></input>
      </label>
      <label>
        Password
        <input
        type="password"
        name="password"></input>
      </label>
      <button type="submit">Sign Up</button>
    </form>
  )
}
