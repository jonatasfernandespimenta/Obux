const bookSchema = require('../Models/booksSchema');

module.exports = {
  async getBook(req, res) {
    const { id } = req.params.id;

    const book = await bookSchema.findById(id);

    res.send(book);
  },

  async updateBook(req, res) {
    const { id, titulo, qualidade, disponibilidade, ano, genero } = req.body;

    const book = await userSchema.findByIdAndUpdate({ id }, { titulo, qualidade, disponibilidade, ano, genero });

    res.send(book);

  },

  async delBook(req, res) {
    const { id } = req.params.id;

    const book = await bookSchema.findByIdAndDelete(id);

    res.send(book, ' Deleted!');
  },

  async findBook(req, res) {
    const { titulo, genero, autor, ano } = req.body;
    const book = await bookSchema.find({ titulo, genero, autor, ano });

    res.send({ book });
  }

};
