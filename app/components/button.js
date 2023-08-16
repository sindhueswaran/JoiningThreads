export default function Button({ type, className, onClick, children }) {
  return (
    <button type={type} className={`bg-transparent border-2 border-jt-primary hover:bg-jt-primary rounded px-8 py-5 ${className}`} onClick={onClick}>{children}</button>
  )
}
