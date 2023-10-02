import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import dataSource from "./dataSource";

const NewAlbum = (props) => {
    const [title,setTitle] = useState('');
    const [artist,setArtist] = useState('');
    const [description,setDescription] = useState('');
    const [year,setYear] = useState('');
    const [image,setImage] = useState('');
    const navigate = useNavigate();

    const saveAlbum = async (album) => {
        const response = await dataSource.post('/albums', album);
        console.log(response);
        console.log(response.data);
        props.onNewAlbum(navigate);
    }

    const handleFormSubmit = function(event) {
        event.preventDefault();

        console.log('submit');
        const album = {
            title:title,
            artist:artist,
            description:description,
            year:year,
            image: image,
            tracks: [],
        };
        console.log(album);

        saveAlbum(album);
    };
    const updateTitle = function(event) {
        setTitle(event.target.value);
    };
    const updateArtist = function(event) {
        setArtist(event.target.value);
    };
    const updateDescription = function(event) {
        setDescription(event.target.value);
    };
    const updateYear = function(event) {
        setYear(event.target.value);
    };
    const updateImage = function(event) {
        setImage(event.target.value);
    };


    return (
        <form onSubmit={handleFormSubmit}>
            <h1>Create Album</h1>
            <div className="mb-3">
                <label for="albumTitle" className="form-label">Album Title</label>
                <input type="text" className="form-control" id="albumTitle" value={title} onChange={updateTitle} />
            </div>
            <div className="mb-3">
                <label for="albumArtist" className="form-label">Artist</label>
                <input type="Text" className="form-control" id="albumArtist" value={artist} onChange={updateArtist} />
            </div>
            <div className="mb-3">
                <label for="albumDescription" className="form-label">Description</label>
                <input type="Text" className="form-control" id="albumDescription" value={description} onChange={updateDescription} />
            </div>
            <div className="mb-3">
                <label for="albumYear" className="form-label">Year</label>
                <input type="Text" className="form-control" id="albumYear" value={year} onChange={updateYear} />
            </div>
            <div className="mb-3">
                <label for="albumImage" className="form-label">Image</label>
                <input type="Text" className="form-control" id="albumImage" value={image} onChange={updateImage} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default NewAlbum;