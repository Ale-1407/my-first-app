import './App.css'
import { useState } from "react";
import Counter from './components/Counter';
import Header from './components/Header'
import Main from './components/Main';
import Card from './components/Card';
import Navbar from './components/Navbar'


function App() {

  const nomi = ['Alessia', 'Federico', 'Simone', 'Sara', 'Roberto', 'Gin'];

  // logica da Form
  const [userName, setUserName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = (ev) => {
        ev.preventDefault();

        let newCard = {
            name: userName,
            mail: userMail,
        };

        const addingNewCard = [ ...submittedData, newCard];
        setSubmittedData(addingNewCard);

        // resetto i campi
        setUserName("");
        setUserMail("");
    }


  return (
    <>
      <Navbar />
      <Header title="Title" />
      <Main className="padding">
        <Main.List>
          {nomi.map((nome, index) => {
            return <Main.List.Items key={index}>{nome}</Main.List.Items>
          })}
        </Main.List>
        <Main.Form onSubmit={handleSubmit}>
          <Main.Form.Input label="Name:" value={userName} onChange={(ev) => setUserName(ev.target.value)} />
          <Main.Form.TextArea label="Mail:" value={userMail} onChange={(ev) => setUserMail(ev.target.value)} />
          <Main.Form.Button>Aggiungi</Main.Form.Button>
           {submittedData.map((el, index) => {
            return <Card key={index} name={el.name} mail={el.mail} />
          })}
        </Main.Form>
      </Main>
      <div id='box'>
        <h1 className='space welcome_title'>Hello World!</h1>
        <label htmlFor="input" className='space first-label'>Inserisci del testo:</label>
        <input type="text" id='input'className='space first-input' placeholder='Scrivi...'/>
      </div>
      <Counter/>
    </>
  )
}

export default App
