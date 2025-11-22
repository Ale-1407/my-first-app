import { useState } from "react";

export default function Form() {

    const [userName, setUserName] = useState("");
    const [userMail, setUserMail] = useState("");

    const handleSubmit = (ev) => {
        ev.preventDefault();

        console.log(userName);
        console.log(userMail);    
    }


    return (
        <>
            <form onSubmit={handleSubmit}  className="space">
                <div className="mb-3 form-floating">
                    <label htmlFor="userName" >Name:</label>
                    <input type="text" id="userName" placeholder="Your name" className="form-control w-25" 
                    value={userName} onChange={(ev) => setUserName(ev.target.value)} />
                </div>
                <div className="mb-3 form-floating">
                    <label htmlFor="userMail" >Mail:</label>
                    <textarea type="text" id="userMail" placeholder="Your message" className="form-control w-25" 
                    value={userMail} onChange={(ev) => setUserMail(ev.target.value)} ></textarea>
                </div>
                <div>
                    <button type="submit" className="btn btn-outline-light">Aggiungi</button>
                </div>
            </form>
        </>
    )
}