import axios from "axios";

export default {
  // Gets all scraped articles
  getScrape: function() {
    return axios.get("/api/articles/scraped");
  },
  // Gets all saved articles
  getAllArticles: function() {
    return axios.get("/api/articles");
  },
  // Saves an article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles/", articleData);
  },
  // Gets an article by id to populate note
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  }, 
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Creates a new note for an article
  saveNote: function(noteData) {
    return axios.post("/api/articles/notes/" + noteData.id, noteData);
  },
  // Updates note for an article
  updateNote: function(noteData) {
    return axios.put("/api/articles/notes" + noteData.id, noteData);
  },
  deleteNote: function(id) {
    return axios.delete("/api/articles/notes" + id);
  },
};
