var express = require('express');
var router = express.Router();
var burger = require('../models/burgerModels.js');

router.get('/', function(req, res){
    console.log("inside get")
    burger.all(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});
router.post('/api/burgers', function(req, res) {
    console.log("post")
    burger.create([
        'burger_name', 'is_devoured'
    ],[
        req.body.name, req.body.is_devoured
    ], function(result){
        res.json({ id: result.insertedId });
    });
});
router.put('/api/burgers', function (req, res) {
    console.log("inside put", req.body)
   // var condition = 'id ' + req.params.id;
var condition = 'id =' + req.body.id;

    console.log("router /api/burgers/" + req.body)
    console.log('condition', condition);
   // console.log(req.body.is_devoured);
    burger.update({
        is_devoured: 1
    }, condition, function(result) {
            if (result.changeRows == 0){
                return res.status(404).end();
            }else{
                res.status(200).end();
            }
    });
});
router.delete('/api/burgers/:id', function(req, res) {
    console.log("delete")
    var condition = ' id = ' + req.params.id;
    burger.delete(condition, function(result) {
        if (result.affectedRow == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
module.exports = router;