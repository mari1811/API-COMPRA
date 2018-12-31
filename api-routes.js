
let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

var compraControlador = require('./compraControlador');

router.route('/contacts')
    .get(compraControlador.index)
    .post(compraControlador.new);
router.route('/contacts/:contact_id')


module.exports = router;
