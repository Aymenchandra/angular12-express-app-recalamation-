const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/user/addemploye",[verifySignUp.checkDuplicateUsernameOrEmail], controller.addemploye);
  app.get("/api/user/findall", controller.findAllEmploye);
  app.get("/api/user/findallusers", controller.findAllUsers);
  app.get("/api/user/:id", controller.findOneEmploye);
  app.delete("/api/user/delete/:id", controller.deleteOneEmploye);
  app.put("/api/user/update/:id", controller.updateEmploye);
};
