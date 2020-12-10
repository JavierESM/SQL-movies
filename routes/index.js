var express = require('express');
const { Op } = require('sequelize');
var router = express.Router();
let db = require("../database/models")

/* GET home page. */

router.get('/', function (req, res) {
  db.Movies.findAll().then(movies => res.render("movies/show", {movies})).catch(function(errors){
    console.log(errors)
  })
})

router.get('/movies/new', function (req, res) {
db.Movies.findAll({
  order : [
    ["release_date", "DESC"],
  ],
  limit: 5
}).then(movies => res.render("movies/show", {movies})).catch(function(errors){
  console.log(errors)
})
})

router.get("/movies/recommended", function(req, res){
db.Movies.findAll({
  where : {
    rating :{[Op.gte] : 8}}
}).then(movies => res.render("movies/show", {movies})).catch(function(errors){
  console.log(errors)
})
})

router.post('/movies/search', function (req, res) {
 let busqueda = req.body.search

  db.Movies.findAll({
    where : {
      title: {[Op.like] : `%${busqueda}%`}
    }
  }).then(movies => res.render("movies/show", {movies})).catch(function(errors){
    console.log(errors)
  })
})





module.exports = router;
