import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <div id='box'>
        <h1 className='space welcome_title'>Hello World!</h1>
        <label htmlFor="input" className='space first-label'>Inserisci del testo:</label>
        <input type="text" id='input'className='space first-input' placeholder='Scrivi...'/>
      </div>
    </>
  )
}

export default App
