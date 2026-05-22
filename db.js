const mongoose = require('mongoose');

async function conectarBanco() {
  try {
    await mongoose.connect('mongodb://localhost:27017/meubanco');
    console.log('Conectado ao MongoDB');
  } catch (erro) {
    console.error('Erro ao conectar:', erro);
    process.exit(1);
  }
}

module.exports = conectarBanco;
