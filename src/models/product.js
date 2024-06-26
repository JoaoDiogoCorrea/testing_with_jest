const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { 
    type: Number, 
    required: true,
    validate: {
      validator: function(v) {
        return v >= 0;
      },
      message: props => `${props.value} is not a valid price! Price must be a positive number.`
    }
  },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', ProductSchema);