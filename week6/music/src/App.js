import React, { useEffect, useState } from "react";
import Card from "./Card";
import SearchForm from "./SearchForm";
import dataSource from "./dataSource";

const App = () => {
    const [searchPhrase,setSearchPhrase] = useState("");
    const [albumList, setAlbumList] = useState([]);

    let refresh = false;

    const updateSearchResults = (phrase) => {
        console.log("phrase is " + phrase);
        setSearchPhrase(phrase);
    }

    const loadAlbums = async () => {
        const response = await dataSource.get("/albums");

        setAlbumList(response.data);
    }

    useEffect(() => {
        loadAlbums();
    }, [refresh]);

    const renderedList = function() {
        return albumList.map((album) => {
            if(album.description.toLowerCase().includes(searchPhrase.toLowerCase()) || searchPhrase === "") {
                return (
                    <div className="col">
                        <Card 
                        key={album.id}
                        albumTitle={album.title}
                        albumDescription={album.description}
                        imgURL={album.image}
                        buttonText="OK"
                        />
                    </div>
                );
            }
            return ("");
        });
    };

    return (
        <div className="container">
            <SearchForm onSubmit={updateSearchResults} />

            <div className="row g-3">
                {renderedList()}
            </div>
        </div>
    );
}

export default App;