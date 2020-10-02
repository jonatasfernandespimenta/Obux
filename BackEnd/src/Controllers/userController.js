const md5 = require('md5');
const bcrypt = require('bcrypt');
const CPF = require('cpf-check');
const path = require('path');
const fs = require('fs');

const { moreThan18Years } = require('../Utils/date');

const bookSchema = require('../Models/booksSchema');
const userSchema = require('../Models/userModel');

const verify = (user, cpf, dataNasc) => {
  if (user) {
    return 'User already exists';
  }

  if (!CPF.validate(cpf)) {
    return 'CPF not valid';
  }

  if (!moreThan18Years(new Date(dataNasc))) {
    return 'You are under 18';
  }

  return false;
};

module.exports = {
  async getUser(req, res) {
    const { id } = req.params;

    const user = await userSchema.findOne({ _id: id }).lean();
    user.stars = user.totalrates/user.givenrates;
    return user ? res.send({ user }) : res.status(404).send({});
  },

  async createUser(req, res) {
    try {
      const { nome, dataNasc, telefone, email, cpf, senha, cidade, estado, } = req.body;

      const salt = bcrypt.genSaltSync(10);
      const encryptedCPF = md5(cpf);

      const user = await userSchema.findOne({
        $or: [
          { email },
          { cpf: encryptedCPF },
        ],
      }).select('+cpf').exec();

      const userVerify = verify(user, cpf, dataNasc);

      if (userVerify) {
        const filePath = path.resolve(__dirname, '..', '..', 'uploads', req.file.filename);
        fs.unlinkSync(filePath);
        return res.send(userVerify);
      }

      const encyptedPassword = bcrypt.hashSync(senha, salt);

      const fileName = `http://localhost:3000/files/${req.file.filename}`;
      const createdUser = await userSchema.create({
        nome,
        dataNasc,
        telefone,
        email,
        cpf: encryptedCPF,
        senha: encyptedPassword,
        cidade,
        estado,
        pfp: fileName,
      });
      return res.json(createdUser);
    } catch (e) {
      console.log(e);
      return res.status(500).send('Error');
    }
  },

  async login(req, res) {
    const { email, senha } = req.body;

    const user = await userSchema.findOne({ email }).select(['+senha']);

    if (user) {
      if (bcrypt.compareSync(senha, user.senha)) {
        user.senha = undefined;
        return res.send({ user });
      }
      return res.status(400).send('Incorrect Email or Password');
    }
    return res.send('User does not exists');
  },

  async registerBook(req, res) {
    const { email, biblioteca } = req.body;

    const { titulo, qualidade, disponibilidade } = req.body;
    const book = await bookSchema.findOne({ titulo });

    const filePath = path.resolve(__dirname, '..', '..', 'uploads', req.file.filename);
    fs.unlinkSync(filePath);
    const fileName = `http://localhost:3000/files/${req.file.filename}`;

    if(!book) {
      const createBook = await bookSchema.create({ titulo, qualidade, disponibilidade, foto: fileName });
      
      const createdBook = await userSchema.findOneAndUpdate({ email, $push: { biblioteca: createBook } });
      
      console.log(createdBook);
      res.send(createdBook);
    }
  },

  async updateUser(req, res) {
    const { id, nome,
      dataNasc,
      telefone,
      email,
      cidade,
      estado,
      pfp } = req.body;

    const user = await userSchema.findByIdAndUpdate({ id }, {
      nome, 
      dataNasc,
      telefone,
      email,
      cidade,
      estado,
      pfp });

    res.send(user + ' updated')
  },

  async delUser(req, res) {
    const { id } = req.params;

    const user = await userSchema.findByIdAndDelete(id);

    res.send('User: ' + user + ' deleted');
  },

  async rateUser(req, res) {
    const { stars } = req.body;
    const { id } = req.params;

    try {
      const user = await userSchema.findById({_id: id});
      if(user) {
        const newRate = user.totalrates + stars;
        const newGivenRates = user.givenrates + 1;
        user.totalrates = newRate;
        user.givenrates = newGivenRates;
        const saas = await user.save();
        res.json(saas);
      } else {
        res.send('User not found');
      }

    } catch(e) {
      console.log(e);
    }

  },

  async findUserByRegion(req, res) {
    const { cidade, estado } = req.body;
    const user = await userSchema.find({ cidade, estado });
    res.send({ user });
  }

};
