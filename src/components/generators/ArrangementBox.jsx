import { capitalizeFirstLetter } from '../../Functions'

function ArrangementBox({ name }) {
  let color
  if (name.toLowerCase() === 'verse') {
    color = 'light'
  } else if (name.toLowerCase() === 'chorus' || name.toLowerCase() === 'hook') {
    color = 'green'
  } else {
    color = 'dark'
  }
  return (
    <div className={`box box-${color}`}>{capitalizeFirstLetter(name)}</div>
  )
}

export default ArrangementBox