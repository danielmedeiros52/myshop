import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
  {
    id: { type: String },
    descricao: { type: String, require: true },
    fornecedor: { type: String },
    tamanho: { type: String },
    cores: { type: String },
    tipo: { type: String },
    margem: { type: String },
    estoque: { type: String },
    qtdVendido: { type: String },
    preco: { type: String },


  },
  {
    versionKey: false,
  }
);

const produtcts = mongoose.model("products", autorSchema);

export default produtcts;
