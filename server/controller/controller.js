const userDB = require("../model/model.js");

// create and save user

exports.create = (req, res) => {
  // validate user
  if (!req.body) {
    res.status(400).send({ message: "content can not be empty" });
    return;
  }
  // new user
  const user = new userDB({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });
  user
    .save(user)
    .then((data) => {
      // res.send(data);
      res.redirect('/add-user')
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error while saving user in database",
      });
    });
};

// find all users or single user
exports.find = (req, res) => {
    // for single user
  if (req.query.id) {
    const id = req.query.id;
    userDB
      .findById(id)
      .then((data) => {
        if (!data) {
          res.status(400).send({
            message: `not found user with id ${id}`,
          });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: ` error while getting user ${err}`,
        });
      });
  } else {
      // for getting all users
    userDB
      .find()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "error while getting data from databse",
        });
      });
  }
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "data to update can not be empty",
    });
  }
  const id = req.params.id;
  userDB
    .findByIdAndUpdate(id, req.body)
    .then((data) => {
      if (!data) {
        res.status(400).send({
          message: `cannot update user with ${id} Or user did not found`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `error while updating ${err}`,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  userDB
    .findByIdAndDelete(id, req.body)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `cannot find the id ${id} or user not found`,
        });
      } else {
        res.status(200).send({
          message: "user deleted succesfuly",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `user could not delete with id ${id}`,
      });
    });
};
