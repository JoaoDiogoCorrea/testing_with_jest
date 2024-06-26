const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true,
    validate: {
      validator: function(v) {
        return v.length > 3;
      },
      message: props => `${props.value} é muito curto! Nome precisa ser maior que 3 caracteres.`
    }
  },
  price: { 
    type: Number, 
    required: true,
    validate: {
      validator: function(v) {
        return v >= 0;
      },
      message: props => `${props.value} não é um preço válido! O preço precisa ser positivo.`
    }
  },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', ProductSchema);