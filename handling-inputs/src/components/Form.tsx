import { useState } from "react"

export function Form2(props:any){
    const [state, setState] = useState({
        name: ""
    })
    function handleChange(e: any){
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    function handleSubmit(e:any){
        e.preventDefault()
        props.onSubmit(state.name)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={state.name} onChange={handleChange}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}