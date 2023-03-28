import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  Email: {
    type: String,
  },
 password: {
    type: String,
  },
   
});

const User = mongoose.model("user", userSchema, "users");
export default User;
