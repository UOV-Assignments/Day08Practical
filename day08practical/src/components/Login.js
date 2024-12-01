import { useState } from "react"
import Button from 'react-bootstrap/Button';
export default function Login(params) {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('')
    return(
        <>
        <div>
            <h1>Login</h1>
            <table align="center">
                <tbody>
                    <tr  align="center">
                        <td>Username:<input type="text" name="username" value={username} onChange={(e)=>{setUsername(e.target.value)}} /></td>
                    </tr>
                    <tr  align="center">
                        <td>Password:<input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td><Button as="input" type="submit" value="Submit" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}