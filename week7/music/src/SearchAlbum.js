import React from "react";
import SearchForm from "./SearchForm";
import AlbumList from "./AlbumList";

const SearchAlbum = (props) => {
    console.log('SearchAlbum props ', props);
    return(
        <>
            <SearchForm onSubmit={props.updateSearchResults} />
            <AlbumList albumList={props.albumList} onClick={props.updateSingleAlbum} />
        </>
    );
};

export default SearchAlbum;