function Header() {
  const headerStyles = {
    backgroundColor: '#999',
    color: '#333',
    textAlign: 'center',
    padding: '1rem'
  }
  return (
    <header style={headerStyles}>
      <div>
        <h2>Music Production Challenge</h2>
      </div>
    </header>
  )
}

export default Header