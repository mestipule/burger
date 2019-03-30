//configure our route that will use the express router
const express = require('express');
const router =  express.Router();

const burger = require('../models/burger.js');
//setting our router
// home route is represented by '/'
router.get('/', function (req, res){
    res.redirect('/allBurgers');

});

router.get('/allBurgers', function(req, res){
    burger.all(function(burgerdata){
        res.render('index', { burger_data: burgerdata});
    });
});
router.post('/allBurgers', function(req, res){
    burger.create(["name", "devoured"], [req,body.name, req.body.devoured], function(result){
       res.json({ id: result.insertedId});
    });
});

router.put('/api/burgers/:id', function(redirect, res){
    var condition = 'id = ' + req.params.id;
    console.log("condition", condition);
    burger.update( {
        devoured: req.body.devoured
    },
    condition, function(result){
        if (result.changedRows === 0){
            return res.status(404).end()
        }
        res.status(100).end();
    });
});

//    router.selectAll('burgers', function(err, burgers){
//         if (err){
//             console.error(err);
//             return res.status(501).json({
//                 message: "Not able to do query the database!"
                
//             });
           
//         }
//         console.log('burger: ', burgers)
//         res.render('index');
//    });

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
