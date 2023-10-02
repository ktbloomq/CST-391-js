import React from "react";
import TrackList from "./TrackList";

const Card = (props) => {

    
    return (
        <div className="col">
            <div className="card" style={{width: '18rem'}}>
                <img src={props.album.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.album.title}</h5>
                    <p className="card-text overflow-hidden">{props.album.description}</p>
                    <TrackList tracks={props.album.tracks} onClick={props.onTrackSelect} />
                    <button href="#" className="btn btn-primary" onClick={ () => {props.onClick(props.album.albumId)}}>{props.buttonText}</button>
                </div>
            </div>
        </div>
    );
}

export default Card;