function Card({ children, classNames }) {
  // console.log(children)
  return (
    <section className={`card ${classNames.join(' ')}`}>
      {children}
    </section>
  )
}

export default Card