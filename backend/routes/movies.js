import express from 'express';
import { appDataSource } from '../datasource.js';
import Movies from '../entities/movies.js';

const router = express.Router();
//let movies = [];

router.post('/new', function(req, res){
  /*const newMovie = {
      titre: req.body.titre,
      date: req.body.date,
  };
  movies.push(newMovie);
  res.status(201).send('Film ajouté avec succès !');*/

  const moviesRepository = appDataSource.getRepository(Movies);
  const newMovie = moviesRepository.create({
    titre: req.body.titre,
    date: req.body.date
  });
  console.log(req.body);
  moviesRepository
    .insert(newMovie)
    .then(console.log("Film ajouté avec succès"))
    .catch(function (error) {
      console.error(error);
      if (error.code === '23505') {
        res.status(400).json({
          message: `Film avec ID "${newMovie.id}" existe déjà`,
        });
      } else {
        res.status(500).json({ message: "Erreur pendant l'ajout du film" });
      }
    });
});

router.get('/', function(req,res){
  const moviesRepository = appDataSource.getRepository(Movies);
  const listMovies = moviesRepository.find({
    select: {
      titre: true,
      date: true,
    },
  });
  console.log(listMovies);
})

export default router;

