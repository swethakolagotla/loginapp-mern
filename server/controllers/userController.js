 import User from "../models/userModel.js";
const getUsers = async (req, res) => {
  try {
    const data = await User.find(req.query);
    res.json({
      status: "success",
      length: data.length,
      data,
    });
  } catch (err) {
    res.json({
      status: "error",
      message: err.message,
    });
  }
};
const loginUser = async (req, res) => {
  const { Email, password } = req.body;
  User.findOne({ Email: Email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successfull", user: user });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  });
};
const registerUser=async(req,res)=>{
    const { name, Email, password } = req.body;
    User.findOne({ Email: Email }, (err, user) => {
      if (user) {
        res.send({ message: "User already registerd" });
      } else {
        const user = new User({
          name,
          Email,
          password,
        });
        user.save((err) => {
          if (err) {
            res.send(err);
          } else {
            res.send({ message: "Successfully Registered, Please login now." });
          }
        });
      }
    });
}
 
 

export { loginUser, registerUser,getUsers }; 
