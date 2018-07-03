const router = require("express").Router();
const notesController = require("../../controllers/notesController");

router
    .route("/notes")
      .post(notesController.create)
      .put(notesController.findOneAndUpdate)
      .delete(notesController.remove); 

module.exports = router;