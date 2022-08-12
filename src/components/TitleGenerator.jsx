import { useState } from "react"
import Card from "./shared/Card"
import {FiRefreshCcw} from 'react-icons/fi'
import {wordList} from '../data/words.js'

function TitleGenerator() {
  const iconStyle = {
    marginLeft: '1rem',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 'none',
  }

  const [title, setTitle] = useState(randomWord())

  return (
    <Card>
          <h2>Title:</h2>
          <div style={{marginLeft: '1rem'}}>
            {title}
            <button onClick={() => setTitle(randomWord)} style={iconStyle}>
              <FiRefreshCcw />
            </button>
          </div>
    </Card>
  )
}

function randomWord() {
  const randomNumber = Math.floor(Math.random() * wordList.length)
  const word = wordList[randomNumber]
  
  return word.charAt(0).toUpperCase() + word.slice(1)
}

export default TitleGenerator