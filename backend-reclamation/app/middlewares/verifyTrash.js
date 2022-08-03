const db = require("../models");
const trash = db.trash;

checkDuplicateTrash = (req, res, next) => {
  // code trash
  trash.findOne({
    code: req.body.code
  }).exec((err, trash) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (trash) {
      res.status(400).send({ message: "Failed! trash is already in use!" });
      return;
    }
    next();
  });
};


const verifyTrash = {
  checkDuplicateTrash,
};

module.exports = verifyTrash;
