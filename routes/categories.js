var express = require('express');
var router = express.Router();
var dbConn = require('../lib/db')

/* GET users listing. */
router.get('/', function(req, res, next) {
    dbConn.query('SELECT * FROM categorias ORDER BY idCATEGORIAS desc',function(err,rows)     {
 
        if(err) {
            req.flash('error', err); 
            res.render('categories/index', {data:''});
        } else {
            res.render('categories/index',{data:rows});
        }
    });

    
});

module.exports = router;