import axios from "axios";

export function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log("handle submit", params);
    axios.post("http://localhost:3000/users.json", params).then((response) => {
      console.log(response.data);
      event.target.reset();
    });
  };

  return (
    <div id="signup">
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Email: <input name="email" type="email" />
        </div>
        <div>
          Password: <input name="password" type="password" />
        </div>
        <div>
          Password Confirmation: <input name="password_confirmation" type="password" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
