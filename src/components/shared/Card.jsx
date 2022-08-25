function Card({ children, classNames }) {
  return (
    <section className={`card ${classNames.join(' ')}`}>
      {children}
    </section>
  )
}

export default Card