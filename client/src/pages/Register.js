import React from "react";
 
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
const Register = () => {
    const navigate= useNavigate();

    const [user, setUser] = useState({
      name: "",
      Email: "",
      password: "",
      reEnterPassword: "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setUser({
        ...user,
        [name]: value,
      });
    };

    const register = () => {
      const { name, Email, password, reEnterPassword } = user;
      if (name && Email && password && password === reEnterPassword) {
        axios.post("http://localhost:4000/register", user).then((res) => {
          alert(res.data.message);
          console.log(res)
         navigate("/login");
        });
      } else {
        alert("invalid input");
      }
    };
  return (
    <div>
      <MDBContainer fluid>
        <div
          className="p-5 bg-image"
          style={{
            backgroundImage:
              "url(https://mdbootstrap.com/img/new/textures/full/171.jpg)",
            height: "300px",
          }}
        ></div>

        <MDBCard
          className="mx-5 mb-5 p-5 shadow-5"
          style={{
            marginTop: "-100px",
            background: "hsla(0, 0%, 100%, 0.8)",
            backdropFilter: "blur(30px)",
          }}
        >
          <MDBCardBody className="p-5 text-center">
            <h2 style={{ color: "black" }} className="fw-bold mb-5">
              Sign up now
            </h2>

            <MDBRow>
              <MDBCol col="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="name"
                  id="form1"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  type="text"
                />
              </MDBCol>
            </MDBRow>

            <MDBInput
              wrapperClass="mb-4"
              label="Email"
              name="Email"
              value={user.Email}
              onChange={handleChange}
              id="form1"
              type="email"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="form1"
              name="password"
              value={user.password}
              onChange={handleChange}
              type="password"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="re-enter Password"
              id="form1"
              name="reEnterPassword"
              value={user.reEnterPassword}
              onChange={handleChange}
              type="password"
            />

            <div className="d-flex justify-content-center mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember Password"
              />
            </div>

            <button className="btn-4" onClick={register}>
              sign up
            </button>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
};

export default Register;
