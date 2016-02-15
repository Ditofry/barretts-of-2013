var express = require('express'),
    debug = require('debug')('worker'),
    fs = require('fs'),
    path = require('path'),
    pathPrefix = "./public/images/unslider/",
    sliderImages = [];

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readdir(pathPrefix, function(err, files){
    if (err) {
      throw err;
    }

    sliderImages = files.map(function (name) {
      return path.join("/images/unslider/", name); // Build path
    });

    res.render('index', {
      images: sliderImages
    });
  });
});

module.exports = router;
