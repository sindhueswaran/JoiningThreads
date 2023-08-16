export default function Section({ id, className, children }) {
  return (
    <section id={id} className={`py-20 odd:bg-gray-100 w-screen ${className}`}>{children}</section>
  )
}
