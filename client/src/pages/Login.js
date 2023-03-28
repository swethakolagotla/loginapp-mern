import React, { useState } from "react";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import File from "../components/File";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    Email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post("http://localhost:4000/login", user).then((res) => {
      alert(res.data.message);
      setUser(res.data.user);
     navigate("/file");
    });
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <div>Welcome !!</div>
      <MDBInput
        name="Email"
        value={user.Email}
        onChange={handleChange}
        wrapperClass="mb-4"
        label="Email address"
        id="form1"
        type="email"
      />
      <MDBInput
        name="password"
        value={user.password}
        onChange={handleChange}
        wrapperClass="mb-4"
        label="Password"
        id="form2"
        type="password"
      />

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox
          name="flexCheck"
          value=""
          id="flexCheckDefault"
          label="Remember me"
        />
        <a href="!#">Forgot password?</a>
      </div>

      <button className="mb-4" onClick={login}>
        Sign in
      </button>

      <div className="text-center">
        <p>
          Not an Admin? <a href="/register">Register</a>
        </p>
      </div>
    </MDBContainer>
  );
};
export default Login;
