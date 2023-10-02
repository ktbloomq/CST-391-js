import React, { useState } from "react";
import Card from "./Card";

const OneAlbum = (props) => {
    const [selectedTrack, setSelectedTrack] = useState(props.album.tracks[0]);
    console.log("OneAlbum props", props);

    const handleTrackSelect = function(index) {
        setSelectedTrack(props.album.tracks[index]);
        // console.log('selected track', selectedTrack);
    }

    return (
        <div className="container">
            <div className="row g-3">
                <Card
                    key={props.album.id}
                    album={props.album}
                    onTrackSelect={handleTrackSelect}
                    buttonText="Edit"
                />
                <div className="col">
                    <div className="card">
                        <div className="card-body" style={{ whiteSpace: "pre-line"}}>{selectedTrack.lyrics}</div>
                    </div>
                    <div className="card">
                        <a className="card-body" href={selectedTrack.video}>{selectedTrack.video}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OneAlbum;