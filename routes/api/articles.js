const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

//. api/articles/scraped
router
  .route("/scraped")
      .get(articlesController.scrape)

//. api/articles
router
    .route("/")
      .get(articlesController.findAll);
      .post(articlesController.create)

//. api/articles/:id 
router
  .route("/:id")
    .get(articlesController.findById)
    .delete(articlesController.remove);
    
//still need put route! 

module.exports = router;