function Button({ children, version, type, onClick, ...props }) {
  return (
    <button type={type} className={`btn btn-${version}`} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  version: 'primary',
  type: 'button',
}

export default Button