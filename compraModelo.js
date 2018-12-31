
var mongoose = require('mongoose');
var compraSchema = mongoose.Schema({
    cliente: {
        type: String,
        required: true
    },

    monto: String,

    fecha: {
      type: Date,
      default: Date.now
  }

});

var Contact = module.exports = mongoose.model('compra', compraSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}
