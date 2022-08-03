const db = require("../models");
const reclamation = db.reclamation;

exports.addreclamation = (req, res) => {
  const Reclamation = new reclamation({
    reclamation: req.body.reclamation,
    id_user: req.body.id_user
  });

  Reclamation.save((err, Reclamation) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "Reclamation was registered successfully!" });
  });
};

exports.findAll = (req, res) => {
  reclamation.
  find({}).
  populate('id_user','username -_id').select('-__v').
  exec(function (err, reclamation) {
    if (err) return handleError(err);
    res.send(reclamation);
  }); 
};

exports.findone = (req, res) => {
  reclamation.
  find({id_user : req.params.id}).
  populate('id_user','username -_id').select('-__v').
  exec(function (err, reclamation) {
    // if (err) return handleError(err);
    if(!reclamation){
      return res.status(404).send({ message: "User Not found." });
    }
      res.send(reclamation);
  }); 
};

exports.delete = (req, res) => {
  const id = req.params.id;

  reclamation.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete tache with id=${id}. Maybe reclamation was not found!`
        });
      } else {
        res.send({
          message: "reclamation was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete tache with id=" + id
      });
    });
};

