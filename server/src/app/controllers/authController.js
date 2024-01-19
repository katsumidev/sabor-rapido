const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/users");
const authConfig = require("../../config/auth.json");
const mongo = require("mongoose");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const multerConfig = require("../../config/multer");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 90000,
  });
}

// rota de cadastro de usuário
router.post(
  "/register",
  multer(multerConfig).single("file"),
  async (req, res) => {
    const { email, name, cep, password, street, neighborhood, number, complement, uf } = req.body;
    const { filename: key } = req.file;

    try {
      if (await User.findOne({ email })) {
        return res.status(400).send({ error: "User already exists!" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await User.create({
        name,
        email,
        password: hashedPassword,
        cep,
        street,
        neighborhood,
        number,
        complement,
        uf,
        picture: key,
      });

      user.password = undefined;

      return res
        .status(200)
        .send({ user, token: generateToken({ id: user.id }) });
    } catch (err) {
      console.error(err); // Log do erro para depuração
      return res.status(400).send({ error: "Registration failed" });
    }
  }
);

// rota de login de usuário
router.post("/authenticate", async (req, res) => {
  const { email, password } = req.body;

  try {
    const check_user = await User.findOne({ email }).select("+password");

    if (!check_user) {
      return res
        .status(404)
        .send({error: `The email "${email}" was not found in our system.`});
    }

    // utiliza a função compare do bcrypt para comparar a senha enviada com a armazenada no banco de dados, pois a senha no banco está criptografada em blowfish
    const passwordMatch = await bcrypt.compare(password, check_user.password);

    if (!passwordMatch) {
      return res.status(403).send({error: "Incorrect Password!!"});
    }

    check_user.password = undefined;

    res.send({ check_user, token: generateToken({ id: check_user.id }) });
  } catch (error) {
    console.error(error); // Log do erro para depuração
    res.status(500).send("Internal Server Error");
  }
});

router.use(authMiddleware);

router.get('/consult', async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).send('User not found');
    }

    res.json(user);
  } catch (error) {
    console.error(error); // Log do erro para depuração
    res.status(500).send('Internal Server Error');
  }
});



module.exports = (app) => app.use("/auth", router);
