import React from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom"

const AlbumList = (props) => {
    const handleSelectionOne = (albumId) => {
        console.log('Selected ID is ', albumId);
        props.onClick(albumId, navigator);
    };

    console.log('props albumList ', props);
    const navigator = useNavigate();
    const albums = props.albumList.map((album) => {
        return (
            <Card
                key={album.albumId}
                albumId={album.albumId}
                albumTitle={album.title}
                albumDescription={album.description}
                imgURL={album.image}
                buttonText="OK"
                onClick={handleSelectionOne}
            />
        );
    });

    return (
        <div className="container">
            <div className="row g-3">
                {albums}
            </div>
        </div>
    );
};

export default AlbumList;