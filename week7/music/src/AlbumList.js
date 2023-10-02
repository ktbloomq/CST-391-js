import React from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom"

const AlbumList = (props) => {
    const handleSelectionOne = (albumId, uri) => {
        // console.log('Selected ID is ', albumId);
        props.onClick(albumId, navigator, uri);
    };

    // console.log('props albumList ', props);
    const navigator = useNavigate();
    const albums = props.albumList.map((album) => {
        return (
            <Card
                key={album.albumId}
                album={album}
                buttonText="OK"
                onClick={handleSelectionOne}
                onTrackSelect={() => {}}
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