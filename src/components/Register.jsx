import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link, useNavigate } from 'react-router-dom'
function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [mobile, setMobile] = useState('')
  const [role, setRole] = useState('')


  const navigate = useNavigate();
  const handleSumbit = async (e) => {

    // e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/register", {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ name, email, mobile, password, role })
      }
      );
      if (response.ok) {
        navigate("/login")

      } else {
        console.log("Not Ok");
        alert("Not Working")
        return;
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <form action={handleSumbit} >
        <div className="mb-3">
          <label forName="exampleInputName" className="form-label">Name : </label>
          <input type="text" className="form-control" id="exampleInputName"  name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label forName="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label forName="exampleInputMobile" className="form-label">Mobile</label>
          <input type="tel" className="form-control" id="exampleInputMobile" name="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
        </div>
        <div className="mb-3">
          <label forName="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="mb-3">
          <label forName="exampleInputRole" className="form-label">Role</label>
          <input type="text" className="form-control" id="exampleInputRole" name="role" value={role} onChange={(e) => setRole(e.target.value)} />
        </div>

        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" required />
          <label className="form-check-label" forName="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary" onSubmit={handleSumbit}>Submit</button>
        <br />
        <Link to="/">Home</Link>
      </form>
    </>
  )
}

export default Register