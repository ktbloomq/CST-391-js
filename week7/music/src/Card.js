import React from "react";

const Card = (props) => {

    
    return (
        <div className="col">
            <div className="card" style={{width: '18rem'}}>
                <img src={props.imgURL} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.albumTitle}</h5>
                    <p className="card-text overflow-hidden" style={{height: '10rem'}}>{props.albumDescription}</p>
                    <button href="#" className="btn btn-primary" onClick={ () => {props.onClick(props.albumId)}}>{props.buttonText}</button>
                </div>
            </div>
        </div>
    );
}

export default Card;