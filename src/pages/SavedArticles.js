import React, {Component} from "react";
import API from "../utils/API";
import SavedArticleCard from "../components/SavedArticleCard";
import DeleteArticleBtn from "../components/Buttons/DeleteArticleBtn"; 
import AddNoteBtn from "../components/Buttons/AddNoteBtn";  
import SaveNoteBtn from "../components/Buttons/SaveNoteBtn";  
import Note from "../components/Notes/Note"; 


class SavedArticles extends Component {
  state = {
    articles: [],
    title: "",
    summary: "",
    link: "", 
    id: "", 
    show: false, 
    note: "",
  };

  styles = {
    head: {
      fontFamily: "'IM Fell DW Pica SC', serif",
    }, 
  }

  showNote = () => {
    this.setState({ show: true });
  };

  hideNote = () => {
    this.setState({ show: false });
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getAllArticles()
      .then(res => {
        this.setState({ articles: res.data, title: "", summary: "", link: "" , id: ""});
        // console.log(this.state.articles);
      })
      .catch(err => console.log(err));
  }; 

  deleteArt = id => {
    console.log(id); 
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  note = id => {
    API.getArticle(id)
      //TODO set state of Note using res. 
      .then(res => {
        this.setState({ note: res.data, title: "", body: ""})
        console.log(this.state.articles)
      })
      .then(this.showNote())
      .catch(err => console.log(err));
    }

  saveNote(noteData) {
    console.log(noteData); 
    //! 404 ERROR
    API.updateNote(noteData)
      .then(this.hideNote())
      // .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

    render() {
      return (
        <div>
        <h2 style={this.styles.head}>Saved Articles</h2>
        {this.state.articles.length ? (
          <div className="articleCards">
            {this.state.articles.map(article => (
              <SavedArticleCard key={article.title}
                {...article}>
                <DeleteArticleBtn style={this.styles.buttons} onClick={() => this.deleteArt(article._id)} />
                <AddNoteBtn onClick={() => this.note(article._id)} />
                  <Note {...article} show={this.state.show} handleClose={this.hideNote}> 
                    <SaveNoteBtn {...article} onClick={() => {
                      let noteTitle = document.getElementById("titleInput").value;
                      let noteBody = document.getElementById("bodyInput").value;
                      //! INPUTS NOT PULLING FROM NOTES
                      let newNote = {
                        id: article._id,
                        title: noteTitle,
                        body: noteBody,
                      }
                      this.saveNote(newNote)
                    }} />
                  </Note>
              </SavedArticleCard>
            ))}
          </div>
        ) : (
          <h4 style={this.styles.head}>No Results to Display</h4>
        )
        }
        </div>


      )
    }
};

export default SavedArticles;
