import "./Error.css"

export default function Error ({error}){
    console.log('i have an error', error)
    return (
        < div id="error" className="error">
            <h1>Ooops, something bad happened:<h3>{error.message}</h3> </h1>
        </div >
        )
}
