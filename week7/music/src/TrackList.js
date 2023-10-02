import React from "react";

const TrackList = function(props) {
    // console.log('tracks', props.tracks);
    const tracks = props.tracks.map((track, index) => {
        return(
            <li key={index} onClick={() => props.onClick(index)}>
                {track.title}
            </li>
        )
    });

    return(
        <ul>
            {tracks}
        </ul>
    );
};

export default TrackList;