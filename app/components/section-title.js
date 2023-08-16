export default function SectionTitle({ className, children }) {
  return (
    <h3 className={`pb-16 font-serif font-semibold text-jt-primary text-4xl text-center ${className}`}>{children}</h3>
  )
}
