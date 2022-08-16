import { useState } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { MyComponent } from "./components/MyComponent"

export function App() {
  const [state, setState] = useState({
    email: "",
    password: ""
  })
  const handleChange = (e:any) =>{
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  return(
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" name="email" onChange={handleChange}></Form.Control>
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" onChange={handleChange}></Form.Control>
        </Form.Group>
        <Button variant="primary" as="input" type="submit" value="Submit"></Button>
        
      </Form>
      <h5>{state.email} {state.password}</h5>
      <MyComponent title={state.email}></MyComponent>
    </div>
  )
}

export default App