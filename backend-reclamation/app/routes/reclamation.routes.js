module.exports = app => {
    const reclamation = require("../controllers/reclamation.controller");
    var router = require("express").Router();

    router.post("/addreclamation/", reclamation.addreclamation);
    //gets
    router.get("/findall/", reclamation.findAll);
    router.get("/findone/:id", reclamation.findone);
    //delete
    router.delete("/delete/:id", reclamation.delete);


    app.use('/api/reclamation', router);
}