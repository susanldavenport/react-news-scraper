const router = require("express").Router();
const articleRoutes = require("./articles");

// Article routes
router.use("/articles", articleRoutes);

// Notes routes
router.use("/notes", NotesRoutes)

module.exports = router;