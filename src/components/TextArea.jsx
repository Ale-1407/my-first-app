export default function TextArea({value, onChange, label}) {
    return (
        <>
            <div className="form-floating mb-3">
                <textarea type="text" className="form-control w-25" id="userMail" placeholder="Your message"
                      value={value} onChange={onChange}></textarea>
                <label htmlFor="userMail">{label}</label>
            </div>
        </>
    )
}