const express = require('express');
const { Film, Review, User } = require('../models');

const router = express.Router();

// Requetes pour une base de données SQL

// Ajouter un film
router.post('/films', async (req, res) => {
  try {
    const film = await Film.create(req.body);
    res.status(201).send(film);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Récupérer tous les Films
router.get('/films', async (req, res) => {
  try {
    const films = await Film.findAll();
    res.status(201).json(films);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Récupérer un film par son id 
router.get('/films/:id', async (req, res) => {
  try {
      const film = await Film.findByPk(req.params.id);
      if (film) {
        res.status(201).json(film);
    } else {
        res.status(404).json({ error: 'Film not found' });
    }
  } catch (error) {
      res.status(400).send(error);
  }
});

// Modifier un film à partir de son id 
router.put('/films/:id', async (req, res) => {
  try {
    const updated = await Film.update(req.body, { where: { id: req.params.id } });
    if (updated) {
        const updatedFilm = await Film.findByPk(req.params.id);
        res.status(201).json(updatedFilm);
    } else {
        res.status(404).json({ error: 'Film not found' });}
  } catch (error) {
      res.status(400).send(error);
  }
});

// Supprimer un film à partir de son id 
router.delete('/films/:id', async (req, res) => {
    try {
      const suppr = await Film.destroy({ where: { id: req.params.id } });
      if (suppr) {
          res.status(201).json("Film deleted");
      } else {
          res.status(404).json({ error: 'Film not found' });}
  } catch (error) {
      res.status(400).send(error);
  }
});

// Ajouter une review
router.post('/reviews', async (req, res) => {
  try {
    const review = await Review.create(req.body);
    res.status(201).send(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Récupérer toutes les Reviews d'un film
router.get('/films/film/:id/reviews', async (req, res) => {
  try {
    const allReviews = await Review.findAll({ where: { id: req.params.id } });
  if (updated) {
      res.status(201).json(allReviews);
  } else {
      res.status(404).json({ error: 'Review not found' });}



    const review = await Review.findAll({ where: { filmId: id } })
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Récupérer toutes les Reviews d'un user
router.get('/films/user/:id/reviews', async (req, res) => {
  try {
    const review = await Review.findAll({ where: { userId: id } })
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Supprimer une review à partir de son id 
router.delete('/reviews/:id', async (req, res) => {
  try {
      const review = await Review.destroy({ where: { id } })
      res.status(200).send(review);
  } catch (error) {
      res.status(400).send(error);
  }
});

// Ajouter un user
router.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await User.create()	
    res.status(201).send(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Récupérer tous les Users
router.get('/users', async (req, res) => {
  try {
    const user = await User.findAll();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Récupérer un user par id
router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(id);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Modifier un user à partir de son id 
router.put('/users/:id', async (req, res) => {
  try {
      const user = await User.update(data, { where: { id } })
      res.status(200).send(user);
  } catch (error) {
      res.status(400).send(error);
  }
});

// Supprimer un user à partir de son id 
router.delete('/users/:id', async (req, res) => {
  try {
      const user = await User.destroy({ where: { id } })
      res.status(200).send(user);
  } catch (error) {
      res.status(400).send(error);
  }
});


module.exports = router;