import './App.css'

function App() {

  return (
    <>
      <h1 className='space welcome_title'>Hello World!</h1>
      <div>
        <label htmlFor="input" className='space first-label'>Inserisci del testo:</label>
        <input type="text" id='input'className='space first-input' placeholder='Scrivi...'/>
      </div>
    </>
  )
}

export default App
