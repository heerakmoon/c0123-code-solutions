export default function CustomButton({text, color}) {
  // function handleClick() {
  //   alert({text});
  // }

  function onCustomClick() {

  }

  return (
    <button style={{backgroundColor: color}} onClick={onCustomClick(text)}>
      {text}
    </button>
  )
}
