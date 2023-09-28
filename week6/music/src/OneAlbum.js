import React from "react";
import Card from "./Card";

const OneAlbum = (props) => {
    console.log("OneAlbum props", props);
    return (
        <div className="container">
            <div className="row g-3">
                <Card
                    key={props.album.id}
                    albumTitle={props.album.title}
                    albumDescription={props.album.description}
                    imgURL={props.album.image}
                    buttonText="Edit"
                />
                <div className="col">
                    <div className="card">
                        <p>Show the lyrics of selected track here</p>
                    </div>
                    <div className="card">
                        <p>Show the YouTube Video of selected track here</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OneAlbum;