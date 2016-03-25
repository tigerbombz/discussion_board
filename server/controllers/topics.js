var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var Login = mongoose.model('Login');

module.exports = (function() {
  return {
    show: function(req, res) {
      Topic.find({}, function(err, results){
        if(err) {
          console.log(err);
        } else {
          res.json(results);
        }
      });
    },

    post: function(req, res) {
      console.log("im in my controllers");
      Topic.create(req.body, function(err, results){
        if(err) {
          console.log(err);
        } else {
          res.json(results);
        }
      });
    },

    delete: function(req, res){
      Topic.remove({_id: req.params.id}, function (err, results){
      console.log(results);
      });
    }

  };
})();
