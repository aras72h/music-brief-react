import Button from "./shared/Button"
import { IoIosRefresh } from 'react-icons/io'


function Header() {
  const handleRefresh = () => {
    console.log(23);
  }
  return (
    <header className="header">
      <h2>Music Brief</h2>
      <Button onClick={handleRefresh} version='secondary'>
        <div className="refresh-icon">
          <IoIosRefresh size='1.44rem' />
        </div>
        <div>New</div>
      </Button>
    </header>
  )
}

export default Header