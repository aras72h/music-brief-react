function Button({ children, version, type }) {
  return (
    <div className="form-control">
      <button className={`btn btn-${version}`}>
        {children}
      </button>
    </div>
  )
}

Button.defaultProps = {
  version: 'primary',
  type: 'button',
}

export default Button