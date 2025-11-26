export default function Button({children}) {
    return (
        <>
            <button type="submit" className="btn btn-outline-light">{children}</button>
        </>
    )
}