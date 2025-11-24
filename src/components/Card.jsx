export default function Card(props) {
    return (
        <>
        <div className="space">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-name fw-bold">{props.name}</h5>
                    <p className="card-mail">{props.mail}</p>
                </div>
            </div>
        </div>
        </>
    )
}