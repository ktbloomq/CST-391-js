import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import dataSource from "./dataSource";

const EditAlbum = (props) => {
    const [title,setTitle] = useState('');
    const [artist,setArtist] = useState('');
    const [description,setDescription] = useState('');
    const [year,setYear] = useState('');
    const [image,setImage] = useState('');
    const navigate = useNavigate();

    let album = {
        title: '',
        artist: '',
        description: '',
        year: '',
        image: '',
        tracks: [],
    };
    let isNewAlbum = true;

    if(props.album) {
        album = props.album;
        isNewAlbum = false;
    }

    useEffect(() => {
        setTitle(album.title);
        setArtist(album.artist);
        setDescription(album.description);
        setYear(album.year);
        setImage(album.image);
    }, []);

    const saveAlbum = async (album) => {
        let response;
        if(isNewAlbum) {
            response = await dataSource.post('/albums', album);
        } else {
            response = await dataSource.put('/albums', album);
        }
        console.log(response);
        console.log(response.data);
        props.onEditAlbum(navigate);
    }

    const handleFormSubmit = function(event) {
        event.preventDefault();

        console.log('submit');
        const editedAlbum = {
            albumId: album.albumId,
            title:title,
            artist:artist,
            description:description,
            year:year,
            image: image,
            tracks: [],
        };
        console.log(editedAlbum);

        saveAlbum(editedAlbum);
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
            <h1>{isNewAlbum ? "Create New" : "Edit"}</h1>
            <div className="mb-3">
                <label className="form-label">Album Title</label>
                <input type="text" className="form-control" id="albumTitle" value={title} onChange={updateTitle} />
            </div>
            <div className="mb-3">
                <label className="form-label">Artist</label>
                <input type="Text" className="form-control" id="albumArtist" value={artist} onChange={updateArtist} />
            </div>
            <div className="mb-3">
                <label className="form-label">Description</label>
                <input type="Text" className="form-control" id="albumDescription" value={description} onChange={updateDescription} />
            </div>
            <div className="mb-3">
                <label className="form-label">Year</label>
                <input type="Text" className="form-control" id="albumYear" value={year} onChange={updateYear} />
            </div>
            <div className="mb-3">
                <label className="form-label">Image</label>
                <input type="Text" className="form-control" id="albumImage" value={image} onChange={updateImage} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default EditAlbum;