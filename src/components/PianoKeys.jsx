const noteLabels = {
  40: 'C4', 41: 'C#4', 42: 'D4', 43: 'D#4', 44: 'E4', 
  45: 'F4', 46: 'F#4', 47: 'G4', 48: 'G#4', 49: 'A4', 
  50: 'A#4', 51: 'B4', 52: 'C5', 53: 'C#5', 54: 'D5', 
  55: 'D#5', 56: 'E5', 57: 'F5', 58: 'F#5', 59: 'G5', 
  60: 'G#5', 61: 'A5', 62: 'A#5', 63: 'B5', 64: 'C6'
}

const pianoStructure = [
  { white: 40, black: 41 },
  { white: 42, black: 43 },
  { white: 44, black: null },
  { white: 45, black: 46 },
  { white: 47, black: 48 },
  { white: 49, black: 50 },
  { white: 51, black: null },
  { white: 52, black: 53 },
  { white: 54, black: 55 },
  { white: 56, black: null },
  { white: 57, black: 58 },
  { white: 59, black: 60 },
  { white: 61, black: 62 },
  { white: 63, black: null },
  { white: 64, black: null }
]

function playNote(midiNumber) {
  try {
    const frequency = 440 * Math.pow(2, (midiNumber - 49) / 12)
    const AudioContextClass = window.AudioContext || window.webkitAudioContext
    if (!AudioContextClass) return
    
    const audioCtx = new AudioContextClass()
    const osc = audioCtx.createOscillator()
    const gainNode = audioCtx.createGain()
    
    osc.type = 'triangle'
    osc.frequency.setValueAtTime(frequency, audioCtx.currentTime)
    
    gainNode.gain.setValueAtTime(0.15, audioCtx.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.8)
    
    osc.connect(gainNode)
    gainNode.connect(audioCtx.destination)
    
    osc.start()
    osc.stop(audioCtx.currentTime + 0.8)
  } catch (err) {
    console.warn('AudioContext playback blocked or failed:', err)
  }
}

function PianoKeys({ notes }) {
  const noteNumbers = notes.map(note => note.key())

  const handleKeyClick = (e, midiNumber) => {
    e.stopPropagation() // Stop event bubbling to parent white key
    playNote(midiNumber)
  }

  return (
    <div className='piano'>
      {pianoStructure.map(({ white, black }) => {
        const isWhiteActive = noteNumbers.includes(white)
        const isBlackActive = black && noteNumbers.includes(black)
        
        return (
          <div 
            key={white}
            className={`key white ${isWhiteActive ? 'active' : ''}`}
            onClick={(e) => handleKeyClick(e, white)}
            title={noteLabels[white]}
          >
            {isWhiteActive && <span className="note-label">{noteLabels[white]}</span>}
            
            {black && (
              <div 
                className={`key black ${isBlackActive ? 'active' : ''}`}
                onClick={(e) => handleKeyClick(e, black)}
                title={noteLabels[black]}
              >
                {isBlackActive && <span className="note-label">{noteLabels[black]}</span>}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default PianoKeys