var mongoose = require('mongoose');
var Login = mongoose.model('Login');

module.exports = (function() {
  return {
    show: function(req, res) {
      Login.find({}, function(err, results){
        if(err) {
          console.log(err);
        } else {
          res.json(results);
        }
      });
    },

    post: function(req, res) {
      console.log("im in my controllers");
      Login.create(req.body, function(err, results){
        if(err) {
          console.log(err);
        } else {
          res.json(results);
        }
      });
    },

    delete: function(req, res){
      Login.remove({_id: req.params.id}, function (err, results){
      console.log(results);
      });
    }

  };
})();

