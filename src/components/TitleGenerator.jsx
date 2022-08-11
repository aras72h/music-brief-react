import { useState } from "react"
import Card from "./shared/Card"
import {FiRefreshCcw} from 'react-icons/fi'
import {wordList} from '../data/words.js'

function TitleGenerator() {
  const style = {
    marginLeft: '1rem',
    cursor: 'pointer',
  }

  const [title, setTitle] = useState(randomWord())

  console.log()
  
  return (
    <Card>
          <h2>Title:</h2>
          <div style={{marginLeft: '1rem'}}>
            {title}
            <FiRefreshCcw onClick={() => setTitle(randomWord)} style={style} />
          </div>
    </Card>
  )
}

function randomWord() {
  // Math.random() * (max - min) + min;
  const randomNumber = Math.floor(Math.random() * (wordList.length - 1 - 0 + 0))
  const word = wordList[randomNumber]
  console.log(randomNumber);

  return word.charAt(0).toUpperCase() + word.slice(1)
}

export default TitleGenerator