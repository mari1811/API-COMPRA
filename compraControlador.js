
Contact = require('./compraModelo');
exports.index = function (req, res) {
    Contact.get(function (err, contacts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "exito",
            message: "",
            data: contacts
        });
    });
};

exports.new = function (req, res) {
    var compra = new Contact();
    compra.cliente = req.body.cliente ? req.body.cliente : compra.cliente;
    compra.monto =req.body.monto;
    compra.save(function (err) {

res.json({
            message: 'Compra realizada!',
            data: contact
        });
    });
};
