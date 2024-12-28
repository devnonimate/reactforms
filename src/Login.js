import React, { useState } from "react";
import { register, login } from "./api";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleRegister = async () => {
        const response = await register({ username, password, email });
        setMessage(response.message || response.error);
    };

    const handleLogin = async () => {
        const response = await login({ username, password });
        setMessage(response.message || response.error);
    };

    return (
        <div>
            <h1>Login/Cadastro</h1>
            <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleRegister}>Cadastrar</button>
            <button onClick={handleLogin}>Entrar</button>
            <p>{message}</p>
        </div>
    );
};

export default Login;
