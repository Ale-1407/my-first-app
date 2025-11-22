import { useState } from "react";

export default function Form() {
    return (
        <>
            <form className="space">
                <div className="mb-3 form-floating">
                    <label htmlFor="userName" className="" >Name:</label>
                    <input type="text" id="userName" placeholder="Your name" className="form-control w-25" />
                </div>
                <div className="mb-3 form-floating">
                    <label htmlFor="userMail" className="" >Mail:</label>
                    <textarea type="text" id="userMail" placeholder="Your message" className="form-control w-25"></textarea>
                </div>
                <div>
                    <button type="button" class="btn btn-outline-light">Light</button>
                </div>
            </form>
        </>
    )
}