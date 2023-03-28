import mongoose from "mongoose";

const loginSchema = new mongoose.Schema({
  Username: {
    type: String,
  },
  password: {
    type: String,
  },
});

const Login = mongoose.model("login", loginSchema, "logins");
export default Login;
