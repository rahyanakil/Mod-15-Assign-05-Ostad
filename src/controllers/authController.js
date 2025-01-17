const jwt = require("jsonwebtoken");

exports.generateToken = (req, res) => {
  const token = jwt.sign({ user: "Rahyan" }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.json({ token });
};

exports.postResponse = (req, res) => {
  res.json({ message: "I am post body" });
};
