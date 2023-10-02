import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SearchAlbum from "./SearchAlbum";
import NavBar from "./NavBar";
import EditAlbum from "./EditAlbum";
import OneAlbum from "./OneAlbum";
import dataSource from "./dataSource";


const App = () => {
    const [searchPhrase, setSearchPhrase] = useState("");
    const [albumList, setAlbumList] = useState([]);
    const [selectedAlbumId, setSelectedAlbumId] = useState(0);

    const loadAlbums = async () => {
        const response = await dataSource.get("/albums");

        setAlbumList(response.data);
    }

    useEffect(() => {
        loadAlbums();
    }, []);

    const updateSearchResults = (phrase) => {
        console.log("phrase is " + phrase);
        setSearchPhrase(phrase);
    }

    const renderedList = albumList.filter((album) => {
        if (
            album.description.toLowerCase().includes(searchPhrase.toLowerCase()) || 
            searchPhrase === "") {

            return true;
        } else {
            return false;
        }
    });

    const updateSingleAlbum = (id, navigate, uri) => {
        console.log('Update Single album ', id);
        console.log('Update Single album ', navigate);

        let indexNumber = 0;
        for(let i=0; i < albumList.length; i++) {
            if(albumList[i].albumId === id) {
                indexNumber = i;
            }
        }

        setSelectedAlbumId(indexNumber);
        let path = uri + indexNumber
        console.log('path', path);
        navigate(path);
    }

    const onEditAlbum = function(navigate) {
        loadAlbums();
        navigate('/');
    }

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route
                    exact
                    path="/"
                    element={
                        <SearchAlbum
                            updateSearchResults={updateSearchResults}
                            albumList={renderedList}
                            updateSingleAlbum={updateSingleAlbum}
                        />
                    }
                />
                <Route exact path="/new" element={<EditAlbum onEditAlbum={onEditAlbum} />} />
                <Route exact path="/edit/:albumId" element={<EditAlbum onEditAlbum={onEditAlbum} album={albumList[selectedAlbumId]} />} />
                <Route
                    exact
                    path="/show/:albumId"
                    element={<OneAlbum album={albumList[selectedAlbumId]} />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;