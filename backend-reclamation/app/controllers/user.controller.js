const db = require("../models");
const User = db.user;

var bcrypt = require("bcryptjs");

exports.addemploye = (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    roles: req.body.roles
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (!err) {
      res.send({ message: "User was registered successfully!" });
      return;
    }
  })
};

exports.findAllEmploye = (req, res) => {

  User.find({roles:"employe"},{})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Employe."
      });
    });
};

exports.findAllUsers = (req, res) => {
  User.find({ $or:[ { roles: "employe" },{ roles: "user"}]},{})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving User."
      });
    });
};

exports.deleteOneEmploye = (req, res) => {
  const id = req.params.id;

  User.findByIdAndDelete(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Employe with id=${id}. Maybe Employe was not found!`
        });
      } else {
        res.send({
          message: "Employe was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Employe with id=" + id
      });
    });
};

exports.updateEmploye = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update employe with id=${id}. Maybe Employe was not found!`
        });
      } else res.send({ message: "Employe was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Employe with id=" + id
      });
    });
};

exports.findOneEmploye = (req, res) => {
  const id = req.params.id;

  User.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Employe with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Employe with id=" + id });
    });
};
