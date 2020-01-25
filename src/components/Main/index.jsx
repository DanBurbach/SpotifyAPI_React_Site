import React, { Component } from "react";
import * as $ from 'jquery';
import { authEndpoint, clientId, redirectUri, scopes } from "../../constants/config";
import MusicPlayer from '../MusicPlayer';

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
      <div>
        <ul>
          {articles.map(el => (
            <li key={el.id}>{el.title}</li>
          ))}
        </ul>
        <div>
          {!this.state.token && (
                <a
                  className="btn btn--loginApp-link"
                  href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                    "%20"
                  )}&response_type=token&show_dialog=true`}
                >
                  Login to Spotify
                </a>
              )}
              {this.state.token && (
                <MusicPlayer
                  item={this.state.item}
                  is_playing={this.state.is_playing}
                  progress_ms={this.progress_ms}
                />
              )}
          )}
        </div>
      </div>
    );
  }
}

export default Main;