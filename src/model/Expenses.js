import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
  {
    id: { type: String },
    descricao: { type: String, require: true },
    fornecedor: { type: String ,require: true },
    valor: { type: String,require: true },
    vencimento: { type: String,require: true },
    isPago: { type: Boolean },
    isRecorrente: { type: Boolean },

  },
  {
    versionKey: false,
  }
);

const expenses = mongoose.model("epenses", autorSchema);

export default expenses;
