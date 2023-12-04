import axios from "axios";
import { useState } from "react";

export function SignUp() {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        setStatus(error.response.status);
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <hr />
      <h1>Signup</h1>
      {/* ternary syntax */}
      {status ? <img src={`https://http.cat/${status}`} /> : null}
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Name:{" "}
          <input
            name="name"
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={name}
            onChange={(event) => setName(event.target.value.slice(0, 30))}
          />
          <small>{30 - name.length} characters remaining</small>
        </div>
        <div>
          Email:{" "}
          <input
            name="email"
            type="email"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <div>
          Password:{" "}
          <input
            name="password"
            type="password"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <div>
          Password confirmation:{" "}
          <input
            name="password_confirmation"
            type="password"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <button className="btn btn-outline-primary" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}
