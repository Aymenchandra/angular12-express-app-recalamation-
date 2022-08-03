const { verifyTrash } = require("../middlewares");

module.exports = app => {
    const trash = require("../controllers/trash.controller");
    var router = require("express").Router();

    //post
    router.post("/addtrash",[verifyTrash.checkDuplicateTrash], trash.addtrash);

    //gets
    router.get("/findall/", trash.findAll);
    router.get("/findone/:id", trash.findoneTrash);
    //delete
    router.delete("/delete/:id", trash.deleteTrash);
    //put
    router.put("/update/:id", trash.updateTrash);

    app.use('/api/trash', router);
}