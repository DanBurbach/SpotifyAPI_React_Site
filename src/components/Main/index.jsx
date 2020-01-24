import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        { title: "React Redux Tutorial for Beginners", id: 1 },
        { title: "TypeScript tutorial for beginners", id: 2 }
      ],
      token: null,
      item: {
        album: {
          images: [{ url: ""}]
        },
        name: "",
        artists: [{ name: ""}],
        duration_ms:0,
      },
      playing: "Paused",
      progress_ms: 0
    };
  }
  
  render() {
    const { articles } = this.state;
    return (
      <ul>
        {articles.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    );
  }
}

export default Main;