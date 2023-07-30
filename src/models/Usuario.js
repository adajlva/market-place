const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UsuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  senha: { type: String, required: true },
  imagem: { type: String, required: true },
  enderecos: [
    { 
      rua:{ type: String, required:true},
      numero:{ type: Number, required:true},
      complemento:{ type: String, required:false},
      CEP:{ type: String, required:true},
      createdAt:{ type: Date, required: true}
    }
  ],
  createdAt: {type: Date, required: true},
  produtos_fav: [
    {
      _id:{ type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref: "produtos"},
      createdAt:{ type: Date, required: true}
    },
  ],
  admin: { type: Boolean, required: true, default: false },
});

UsuarioSchema.pre("save", async function (next) {
  if(this.senha){
    this.senha = await bcrypt.hash(this.senha, 10);
  }
  next();
});

UsuarioSchema.pre("findOneAndUpdate", async function (next) {
  if(this._update.senha){
    const docToUpdate = await this.model.findOne(this.getQuery());
    if (docToUpdate.senha !== this._update.senha) {
      const newPassword = await bcrypt.hash(this._update.senha, 10)
      this._update.senha = newPassword
    }
  }
  next();
});

const Usuario = mongoose.model("Usuarios", UsuarioSchema);

module.exports = Usuario;
