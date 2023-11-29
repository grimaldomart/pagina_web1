var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET Login page. */
router.get('/Login', function(req, res, next) {
  res.render('Login', { title: 'Express' });
});
  
router.get('/LoginAdm', function(req, res, next) {
  res.render('LoginAdm',{ title: 'Express' });
});


/* POST Login page. */
router.post('/dashboard', function(req, res, next) {
 email=req.body.email;
 password=req.body.password;
 dbConn.query("select * from usuarios where email='"+email+"' and password ='"+password+"'",function(err,rows){
  console.log(rows);
  if(err){
    req.flash('error',err);
    console.log.apply(err);
  }else{
    if(rows.length){
      req.session.idu=rows[0]["id"];
      req.session.email=rows[0]["email"];
      req.session.loggedin=true
      res.redirect('/dashboard');      
    }else{
      req.flash('error','El usuario no exixte...');
      res
      .redirect('/')
    }
  }
 })
});

/* GET Login page. */
router.get('/dashboard', function(req, res, next) {
  if(!req.session.loggedin){
    res.redirect('/login')
  }
  res.render('dashboard');
});

router.get('/logout',function(req,res){
  req.session.destroy();
  res.redirect("/");
});
module.exports = router;
