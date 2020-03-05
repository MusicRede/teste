var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var serviceSchema = new Schema({
  name: String
});
var serviceUserSchema = new Schema({
  service: { type: mongoose.Schema.Types.ObjectId, ref: "autorizados" },
  price: Number
});
mongoose
  .connect(
    "mongodb+srv://Admin:Admin123@smash-unuhz.gcp.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true
    }
  )
  .then(function() {
    console.log(
      "\x1b[32m[ BANCO DE DADOS ] \x1b[0mBanco de dados foi ligado OK"
    );
  })
  .catch(function() {
    // Caso de ERRO
    console.log(
      "\x1b[31m[ BANCO DE DADOS ] \x1b[0mBanco de dados desligado por erro OK"
    );
  });
//database Guilds
var Guilds = new Schema({
  _id: { type: String, required: true },
  prefix: { type: String, default: "!" },
  cargo: { type: String, defaul: "0" },
  canal: { type: String, defaul: "0" },
  autorizados: { type: Array, default: [] }
});
//Database usuarios
var Base = new Schema({
  _id: { type: String, required: true },
  nome: { type: String, required: true },
  senha: { type: String, required: true },
  level: { type: Number },
  xp: { type: Number },
  tag: { type: String },
  logado: { type: Boolean },
  idlogado: { type: String },
  acesso: { type: Number },
  banco: { type: Number },
  dinheiro: { type: Number }
});
var Key = new Schema({
  nome: { type: String },
  max_usos: { type: Number }
});
var Usuarios = mongoose.model("Usuarios", Base);
var Guilds = mongoose.model("Guildas", Guilds);
var Keys = mongoose.model("Keys", Key);
exports.Keys = Keys;
exports.Guilds = Guilds;
exports.Usuarios = Usuarios;
