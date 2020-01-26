import React from 'react';

const MusicPlayer = props => {
    const backgroundStyles = {
        backgroundImage: `url(${ props.item.album.images[0].url})`
    };


    const progressBarStyle = {
        width: (props.progress_ms * 100 / props.item.duration_ms) + '%'
    };

return (
    <div>
        <div>
            <div>
                <img src={props.item.album.images[0].url} alt="album cover"/>
            </div>
            <div>
                <div>{props.item.name}</div>
                <div>{props.item.artists[0].name}</div>
                <div>{props.is_playing ? "Playing" : "Paused"}</div>
                <div>
                    <div className="progressBar" style={progressBarStyle}></div>
                </div>
            </div>
            <div className="background" style={backgroundStyles} />{" "}
        </div>
    </div>
    )
}

export default MusicPlayer;