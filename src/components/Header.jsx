// import { IoMdRefresh } from 'react-icons/io'
// import { FiRefreshCcw } from 'react-icons/fi'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSolid, faRotateRight } from '@fortawesome/free-solid-svg-icons'

// const refreshIcon = <FontAwesomeIcon icon={['faSolid', 'faRotateRight']} />


function Header() {
  return (
    <header className="header">
      <h2>Music Brief</h2>
      <button className="btn btn-secondary" type="button">
        {/* <img className="refresh-icon" src={refreshIcon} alt="Refresh" /> */}
        <div>New</div>
      </button>
    </header>
  )
}

export default Header