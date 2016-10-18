var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'my oh la la' });
});

router.get('/about', function(req, res, next){
	var self ={
		name: 'Christopher',
		phone: '867.5309',
		email: 'hotchick69@aol.com'
	};
	/* response.reder() */
	//1st: template (view)
	//2nd" an Object with data
	res.render('about', self);
});

router.get('/faq', function(req, res, next){
	var questions = {
		questions: ['Can I have a cookie?', 'Can I borrow a dollar?', 'Do you want Thai food?'],
		answers: ['YASSS', 'NOOO', 'Maybe']
	};
	res.render('faq', questions);
});

router.get('/login', function(req,res,next){
	var user = {
		// name: 'Clam',
		password: 'banjo',
		hint: 'strovia'
	};
	res.render('login', user);
})

module.exports = router;
