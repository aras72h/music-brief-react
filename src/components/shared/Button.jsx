function Button({ children }) {
  return (
    <div className="form-control">
      <button className="btn">
        {children}
      </button>
    </div>
  )
}

export default Button