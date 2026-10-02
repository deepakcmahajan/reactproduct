import { useEffect, useState } from "react";
import "./LoginNew.css";

function LoginNew() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((result) => setData(result.users));
  }, []);

  const Show = (e) => {
    e.preventDefault();

    const username = document.getElementById("I1").value;
    const password = document.getElementById("I2").value;

    const user = data.find(
      (item) =>
        item.username === username &&
        item.password === password
    );

    if (user) {
      alert("Login Successfully");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-icon">
          🔐
        </div>

        <h1>Welcome Back</h1>
        <p className="subtitle">
          Login to continue to your account
        </p>

        <form onSubmit={Show}>
          <div className="input-group">
            <label htmlFor="I1">Username</label>
            <input
              id="I1"
              type="text"
              placeholder="Enter Username"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="I2">Password</label>
            <input
              id="I2"
              type="password"
              placeholder="Enter Password"
              required
            />
          </div>

          <div className="options">
            <label className="remember">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="signup-text">
          Don't have an account? <a href="#">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default LoginNew;
