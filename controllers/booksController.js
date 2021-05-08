const db = require("../models");

// This is from the activity. Needs to be completely redone for the assignment
module.exports = {
  findAll: function(req, res) {
    db.Book.find(req.query)
      .then(dbBookData => res.json(dbBookData))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Book
      .create(req.body)
      .then(dbBookData => res.json(dbBookData))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbBookData => dbBookData.remove())
      .then(dbBookData => res.json(dbBookData))
      .catch(err => res.status(422).json(err));
  }
};
