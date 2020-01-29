// import React, { Component } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";

// import * as ROUTES from "../constants/routes";

// import Main from "./Main";
// import Error404 from "./Error404";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <div className="App">
//         <BrowserRouter>
//           <Switch>
//             <Route exact path={ROUTES.MAIN} component={Main} />

//             <Route component={Error404} />
//           </Switch>
//         </BrowserRouter>
//       </div>
//     );
//   }
// }

// export default App;


import React, { Component } from "react";
import * as $ from "jquery";
import { authEndpoint, clientId, redirectUri, scopes } from "../constants/config";
import hash from "../components/Main/hash";
// import Script from "react-load-script";

import MusicPlayer from "../components/MusicPlayer";
// import SpotifyWebApi from "spotify-web-api-js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      item: {
        album: {
          images: [{ url: "" }]
        },
        name: "",
        artists: [{ name: "" }],
        duration_ms: 0
      },
      is_playing: "Paused",
      progress_ms: 0
    };
    this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
    // this.handleScriptLoad = this.handleScriptLoad.bind(this);
  }
  componentDidMount() {
    // Set token
    let _token = hash.access_token;

    if (_token) {
      // Set token
      this.setState({
        token: _token
      });
      this.getCurrentlyPlaying(_token);
    }
  }

  getCurrentlyPlaying(token) {
    // Make a call using the token
    $.ajax({
      url: "https://api.spotify.com/v1/me/player",
      type: "GET",
      beforeSend: xhr => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: data => {
        this.setState({
          item: data.item,
          is_playing: data.is_playing,
          progress_ms: data.progress_ms
        });
      }
    });
  }

//   handleScriptLoad = () => {
//   return new Promise(resolve => {
//     if (window.Spotify) {
//       resolve();
//     } else {
//       window.onSpotifyWebPlaybackSDKReady = resolve;
//     }
//   });
// }

  render() {
    return (
      <div className="App">
        <header className="App-header">
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
            // <Script 
            //   url="https://sdk.scdn.co/spotify-player.js"
            //   onError={this.handleScriptError}
            //   onLoad={this.handleScriptLoad}
            // />

          )}
        </header>
      </div>
    );
  }
}

export default App;
