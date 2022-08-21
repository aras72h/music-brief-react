function PianoKeys({ notes }) {
  // console.log(notes);

  const noteNumbers = notes.map(note => note.key())


  return (
    <div className='piano'>
      <div data-note="40" className={`key white ${noteNumbers.includes(40) && 'active'}`}></div>
      <div data-note="41" className={`key black ${noteNumbers.includes(41) && 'active'}`}></div>
      <div data-note="42" className={`key white ${noteNumbers.includes(42) && 'active'}`}></div>
      <div data-note="43" className={`key black ${noteNumbers.includes(43) && 'active'}`}></div>
      <div data-note="44" className={`key white ${noteNumbers.includes(44) && 'active'}`}></div>
      <div data-note="45" className={`key white ${noteNumbers.includes(45) && 'active'}`}></div>
      <div data-note="46" className={`key black ${noteNumbers.includes(46) && 'active'}`}></div>
      <div data-note="47" className={`key white ${noteNumbers.includes(47) && 'active'}`}></div>
      <div data-note="48" className={`key black ${noteNumbers.includes(48) && 'active'}`}></div>
      <div data-note="49" className={`key white ${noteNumbers.includes(49) && 'active'}`}></div>
      <div data-note="50" className={`key black ${noteNumbers.includes(50) && 'active'}`}></div>
      <div data-note="51" className={`key white ${noteNumbers.includes(51) && 'active'}`}></div>
      <div data-note="52" className={`key black ${noteNumbers.includes(52) && 'active'}`}></div>
      <div data-note="53" className={`key white ${noteNumbers.includes(53) && 'active'}`}></div>
      <div data-note="54" className={`key white ${noteNumbers.includes(54) && 'active'}`}></div>
      <div data-note="55" className={`key black ${noteNumbers.includes(55) && 'active'}`}></div>
      <div data-note="56" className={`key white ${noteNumbers.includes(56) && 'active'}`}></div>
      <div data-note="57" className={`key white ${noteNumbers.includes(57) && 'active'}`}></div>
      <div data-note="58" className={`key black ${noteNumbers.includes(58) && 'active'}`}></div>
      <div data-note="59" className={`key white ${noteNumbers.includes(59) && 'active'}`}></div>
      <div data-note="60" className={`key black ${noteNumbers.includes(60) && 'active'}`}></div>
      <div data-note="61" className={`key white ${noteNumbers.includes(61) && 'active'}`}></div>
      <div data-note="62" className={`key black ${noteNumbers.includes(62) && 'active'}`}></div>
      <div data-note="63" className={`key white ${noteNumbers.includes(63) && 'active'}`}></div>
    </div>
  )
}

export default PianoKeys