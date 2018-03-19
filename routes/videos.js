var express = require('express');
var router = express.Router();
var connect = require('../utils/sqlConnect');

router.get('/kids', function(req, res, next) {
  res.render('videos', {videos:true, kids:true, title: 'Videos for kids - Cool Movies',});
});

router.get('/general', function(req, res, next) {
  res.render('videos', {videos:true, kids:false, title: 'Videos - Cool Movies',});
});

module.exports= router;