import { useState } from "react";

const userCredential = {
    email: "test@test.com",
    password: "123123",
};

const App = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setError("");

        if (!email.trim() || !password.trim()) {
            return setError("Llena todos los campos");
        }

        if (
            userCredential.email === email &&
            userCredential.password === password
        ) {
            alert("Bienvenido");
        } else {
            setError("Credenciales no válidas");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="Ingrese email"
                    name="email"
                    value={email}
                />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Ingrese contraseña"
                    name="password"
                    value={password}
                />
                {password === "123123" && <button type="submit">Submit</button>}
            </form>
        </>
    );
};

export default App;
