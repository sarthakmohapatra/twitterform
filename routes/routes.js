var express     = require("express"),
    router      = express.Router();

//Post Route for landing

router.get('/', function(req, res){
    res.render("landing");
}); 

//Exporting this module

module.exports = router;