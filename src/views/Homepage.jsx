import { useState, useEffect } from "react";
import Counter from '../components/Counter';
import Header from '../components/Header'
import Main from '../components/Main';
import Card from '../components/Card';
import LoadingData from '../components/LoadingData';


export default function Homepage() {
    const nomi = ['Alessia', 'Federico', 'Simone', 'Sara', 'Roberto', 'Gin'];

    const [userName, setUserName] = useState("");
    const [userMail, setUserMail] = useState("");
    const [submittedData, setSubmittedData] = useState([]);

    const [users, setUsers] = useState([]);
    //imposto trigger per visualizzare i dati al click del bottone
    const [trigger, setTrigger] = useState(false); 
    const [isVisible, setIsVisible] = useState(false);
    

    const getData = async () => {
        const promise = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await promise.json();
        setUsers(json);
        console.log(json);
    }
    
    useEffect(() => {
        if(!trigger) return;

        const fetchData = async () => {
            await getData();
        };

        fetchData();

    }, [trigger] );

    const handleClick = () => {
        if(isVisible) {
        setIsVisible(false);
        setTrigger(false);
        setUsers(null);
        } else {
        setIsVisible(true);
        setTrigger(true);
        }
    }

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
          <LoadingData title="Ricerca utenti:">
            <button onClick={handleClick} className='btn btn-outline-light mb-3' >Cerca</button>
            <ul>
              {isVisible && users && users.map((user) => {
                return <li key={user.id}>Name: {user.name}, Email: {user.email}</li>
              })}
            </ul>
          </LoadingData>
        </>
      )
}