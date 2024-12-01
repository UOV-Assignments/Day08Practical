import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const Uname = "admin";

  const Upwd = "admin";

  const handleSubmit = () => {
    if (Uname === username && Upwd === password) {
      alert("Login Successfully");
      navigate("/dashboard");
    } else {
      alert("Login Failure");
    }
  };

  return (
    <>
      <div>
        <h1>Login</h1>
        <table align="center">
          <tbody>
            <tr align="center">
              <td>
                Username:
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr align="center">
              <td>
                Password:
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Button
                  as="input"
                  type="submit"
                  value="Submit"
                  onClick={handleSubmit}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
