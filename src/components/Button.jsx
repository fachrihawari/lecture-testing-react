export default function Button(props) {
  const { onClick, variant = 'primary', title } = props

  return (
    <button onClick={onClick} className={`btn btn-${variant}`}>{title}</button>
  )
}