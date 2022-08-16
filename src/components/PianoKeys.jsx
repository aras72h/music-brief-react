function PianoKeys({ notes }) {
  // console.log(notes);

  const noteNumbers = notes.map(note => note.key())


  return (
    <div className='piano'>
      <div data-note="40" className="key white"></div>
      <div data-note="41" className="key black"></div>
      <div data-note="42" className="key white"></div>
      <div data-note="43" className="key black"></div>
      <div data-note="44" className="key white"></div>
      <div data-note="45" className="key white"></div>
      <div data-note="46" className="key black"></div>
      <div data-note="47" className="key white"></div>
      <div data-note="48" className="key black"></div>
      <div data-note="49" className="key white"></div>
      <div data-note="50" className="key black"></div>
      <div data-note="51" className="key white"></div>
      <div data-note="52" className="key white"></div>
      <div data-note="53" className="key black"></div>
      <div data-note="54" className="key white"></div>
      <div data-note="55" className="key black"></div>
      <div data-note="56" className="key white"></div>
      <div data-note="57" className="key white"></div>
      <div data-note="58" className="key black"></div>
      <div data-note="59" className="key white"></div>
      <div data-note="60" className="key black"></div>
      <div data-note="61" className="key white"></div>
      <div data-note="62" className="key black"></div>
      <div data-note="63" className="key white"></div>
    </div>
  )
}

export default PianoKeys