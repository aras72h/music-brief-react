import Button from "./shared/Button"
import { IoIosRefresh } from 'react-icons/io'


function Header({ refreshAll }) {
  return (
    <header className="header">
      <h2>Music Brief</h2>
      <Button onClick={refreshAll} version='secondary'>
        <div className="refresh-icon">
          <IoIosRefresh size='1.44rem' />
        </div>
        <div>New</div>
      </Button>
    </header>
  )
}

export default Header