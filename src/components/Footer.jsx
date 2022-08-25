import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='footer'>
      <div className="myname">Arash Abolhasani</div>
      <div className="social">
        <a href="https://github.com/aras72h" target='_blank' rel='noreferrer'>
          <FaGithub color='#E7F6F2' size={'1.44rem'} />
        </a>
        <a href="https://www.linkedin.com/in/aras72h/" target='_blank' rel='noreferrer'>
          <FaLinkedin color='#E7F6F2' size={'1.44rem'} />
        </a>
      </div>
    </footer>
  )
}

export default Footer