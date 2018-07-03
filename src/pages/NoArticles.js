import React from "react";

const styles = {
  main: {
    padding: "5px",
    fontFamily: "'IM Fell Great Primer', serif",
  }
}

const NoArticles = props => (
  <div className="articles">
    <h5 className="noArt cyan darken-3 white-text center" style={styles.main}>You do not have any articles...<br />Click the <i>Scrape News</i> button above to view articles</h5>
  </div>
);

export default NoArticles;