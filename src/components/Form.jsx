import { useState } from "react";
import Card from "./Card";

export default function Form() {

    const [userName, setUserName] = useState("");
    const [userMail, setUserMail] = useState("");
    
    const [submittedData, setSubmittedData] = useState(null);

    const handleSubmit = (ev) => {
        ev.preventDefault();

        let newCard = {
            name: userName,
            mail: userMail,
        };

        setSubmittedData(newCard);
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="space">                
                <div className="form-floating mb-3">
                    <input type="text" className="form-control w-25" id="userName" placeholder="Your name is"
                      value={userName} onChange={(ev) => setUserName(ev.target.value)} />
                    <label htmlFor="userName">Name:</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea type="text" className="form-control w-25" id="userMail" placeholder="Your message"
                      value={userMail} onChange={(ev) => setUserMail(ev.target.value)}></textarea>
                    <label htmlFor="userMail">Mail:</label>
                </div>
                <div>
                    <button type="submit" className="btn btn-outline-light">Aggiungi</button>
                </div>
            </form>
           
           { submittedData && ( 
            <Card 
                name={submittedData.name} 
                mail={submittedData.mail} 
                /> 
            )} 
        </>
    )
}

