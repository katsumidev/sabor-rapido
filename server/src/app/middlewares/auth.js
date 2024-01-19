const jwt = require("jsonwebtoken");
const User = require("../models/users");
const authConfig = require("../../config/auth.json");

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ error: "No token" });
  }

  const parts = authHeader.split(" ");

  if (!parts.length === 2) {
    return res.status(401).send({ error: "Invalid token" });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ error: "Token malformatted" });
  }

  try {
    const decoded = jwt.verify(token, authConfig.secret);
    req.userId = decoded.id;

    const user = await User.findById(decoded.id);

    if (user) {
      return next();
    } else {
      return res.status(401).send({ error: "User not found" });
    }
  } catch (err) {
    return res.status(401).send({ error: "Invalid token" });
  }
};
