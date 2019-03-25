//configure our route that will use the express router
const express = require('express');
const router =  express.Router();

const orm = require('../config/orm');
//setting our router
// home route is represented by '/'
router.get('/', function (req, res){
    console.log('home');
   orm.selectAll('burgers', function(err, burgers){
        if (err){
            console.error(err);
            return res.status(501).json({
                message: "Not able to do query the database!"
                
            });
           
        }
        res.render('index');
   });
});
//have to check if this adds into the table
// router.put("/api/burgers/:id", function(req, res) {
//     var condition = "id = " + req.params.id;
    
//     console.log("condition", condition);
    
//     burger.update({
//     }, condition, function(result) {
//         if (result.changedRows == 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//         } else {
//         res.status(200).end();
//         }
//     });
//     });


module.exports = router;
