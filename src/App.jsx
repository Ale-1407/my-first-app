import './App.css'
import Counter from './components/Counter';
import Form from './components/Form';
import Header from './components/Header'
import List from './components/List'
import Main from './components/Main';
import Navbar from './components/Navbar'

function App() {

  const nomi = ['Alessia', 'Federico', 'Simone', 'Sara', 'Roberto', 'Gin'];


  return (
    <>
      <Navbar />
      <Header title="Title" />
      <Main>
        <Main.List>
          {nomi.map((nome, index) => {
            return <Main.List.Items key={index}>{nome}</Main.List.Items>
          })}
        </Main.List>
      </Main>
      <div id='box'>
        <h1 className='space welcome_title'>Hello World!</h1>
        <label htmlFor="input" className='space first-label'>Inserisci del testo:</label>
        <input type="text" id='input'className='space first-input' placeholder='Scrivi...'/>
      </div>
      <Counter/>
      <Form />
    </>
  )
}

export default App
