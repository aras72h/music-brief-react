function Card({ children, flexDirection }) {
  const flexCol = {
    flexDirection: flexDirection,
  }
  return (
    <div className="card" style={flexCol}>
      {children}
    </div>
  )
}

Card.defaultProps = {
  flexDirection: 'row',
}

export default Card