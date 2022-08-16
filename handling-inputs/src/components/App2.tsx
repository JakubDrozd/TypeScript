
import { Form2 } from "./Form";


export function App2(props: any){
    function getData(data: any){
        console.log("Coming from AppJs", data)
    }
    return <div>
        <Form2 onSubmit={getData}></Form2>
    </div>
}