const db = require("../models");
const trash = db.trash;

exports.addtrash = (req, res) => {
    const Trash = new trash({
        code:req.body.code,
        remplissage:req.body.remplissage,
        longitude:req.body.longitude,
        latitude:req.body.latitude,
    });
  
    Trash.save((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (!err) {
        res.send({ message: "trash was registered successfully!" });
        return;
      }
    })
  };

exports.findAll = (req, res) => {

    trash.find({})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving trash."
        });
      });
};

exports.deleteTrash = (req, res) => {
    const id = req.params.id;
  
    trash.findByIdAndDelete(id, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Trash with id=${id}. Maybe Trash was not found!`
          });
        } else {
          res.send({
            message: "Trash was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Trash with id=" + id
        });
      });
  };

  exports.updateTrash = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    trash.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update trash with id=${id}. Maybe trash was not found!`
          });
        } else res.send({ message: "trash was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating trash with id=" + id
        });
      });
  };

  exports.findoneTrash = (req, res) => {
    const id = req.params.id;
  
    trash.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Trash with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Trash with id=" + id });
      });
  };
  