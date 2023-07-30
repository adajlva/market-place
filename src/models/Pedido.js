const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({
  produtos: [
    {
      _id:{type: mongoose.Schema.Types.ObjectId,ref:'produtos', required: true},
      quantidade: { type: Number, required: true}
    },
  ],
  dataCompra: { type: Date, required: true, default: Date.now },
  precoTotal: { type: Number, required: true },
  frete: { type: Number, required: true },
  status:{type:String},
  userId: {type: mongoose.Schema.Types.ObjectId,ref:'usuarios'}
});

const Pedido = mongoose.model('Pedidos', PedidoSchema);

module.exports = Pedido;
