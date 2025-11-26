export default function Input({value, onChange, label}) {
    return (
        <>
            <div className="form-floating mb-3">
                <input type="text" className="form-control w-25" id="userName" placeholder="Your name is"
                      value={value} onChange={onChange} />
                <label htmlFor="userName">{label}</label>
            </div>
            
        </>
    )
}