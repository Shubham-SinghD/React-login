import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();


        const isMobile = /^[0-9]{10}$/.test(identifier);
        const payload = {
            password,
            ...(isMobile ? { mobile: identifier } : { email: identifier })
        };

        try {
            const response = await fetch("http://localhost:8080/getRole", {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

        
            const data = await response.json();
            console.log("Role:", data.role);
            console.log("Name:", data.name);
            console.log("Email:", data.email);

            const role = data.role;
            const name = data.name;
            const email = data.email;
            localStorage.setItem("userRole", role.toUpperCase());
            localStorage.setItem("userName", name);
            localStorage.setItem("userEmail", email);

             if (response.ok) {
                navigate("/all");
            } else {
                alert("Invalid login credentials");
                return;
            }
           

        } catch (err) {
            console.error("Login error:", err);
            alert("Login failed. Please try again.");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="identifier" className="form-label">Email or Mobile</label>
                    <input
                        type="text"
                        placeholder="Enter email or mobile number"
                        className="form-control"
                        id="identifier"
                        name="identifier"
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter Password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" required />
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <br />
                <Link to="/">Home</Link>
            </form>
        </>
    );
}

export default LoginPage;
