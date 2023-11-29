var express = require('express');
var router = express.Router();
var dbConn = require('../lib/db')

/* GET users listing. */
router.get('/', function(req, res, next) {
    dbConn.query('SELECT * FROM productos ORDER BY id desc',function(err,rows)     {
 
        if(err) {
            req.flash('error', err); 
            res.render('productos/index', {data:''});
        } else {
            res.render('productos/index',{data:rows});
        }
    });

    
});

module.exports = router;