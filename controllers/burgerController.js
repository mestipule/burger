var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');
router.get('/', function(req, res){
    burger.all(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});
router.post('/api/burgers', function(req, res) {
    burger.create([
        'name', 'devoured'
    ],[
        req.body.name, req.body.is_devoured
    ], function(result){
        res.json({ id: result.insertedId });
    });
});
router.put('/api/burgers/:id', function (req, res) {
    var condition = 'id ' + req.params.id;
    console.log('condition', condition);
    burger.update({
        is_devoured: req.body.is_devoured 
    }, condtion, function(result) {
            if (result.changeRows == 0){
                return res.status(404).end();
            }else{
                res.status(200).end();
            }
    });
});
router.delete('/api/burgers/:id', function(req, res) {
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