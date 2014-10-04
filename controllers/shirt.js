var Shirt = require('../models/Shirt');
/**
 * GET /shirts
 * shirts page
 */
exports.getShirts = function(req, res) {
  Shirt.find( { $query: {}, $orderby: { title : 1 } },  function(err, shirt) {
    if (err) return err;
    res.render('shirts', {title : 'Shirts', shirts : shirt})
  });
};


/**
 * POST new shirt for auth'd user
 *
 */
exports.addShirt = function(req, res) {
  Shirt.find
}