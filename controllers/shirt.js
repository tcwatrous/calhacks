var Shirt = require('../models/Shirt');
/**
 * GET /shirts
 * shirts page
 */
User.findOne({ email: req.body.email }, function(err, existingUser) {
exports.getShirts = function(req, res) {
  Shirt.find({}, function(err, shirt) {
    if (err) return next(err);
    res.render('shirts', {title : 'Shirts', shirts : shirt})
  });
}
