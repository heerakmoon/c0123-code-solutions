export default function CustomButton ({text, color, fontSize}) {

  return (
    <button style={{ backgroundColor: color, fontSize: fontSize }}>
      {text}
    </button>
  )
}
