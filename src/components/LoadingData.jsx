export default function LoadingData({title, children}){
    return (
        <>
            <div className="space">
                <h1>{title}</h1>
                {children}
            </div>
        </>
    )
}