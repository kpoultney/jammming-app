//these components should be static and may contain mock data. At this point, you should focus on how your components will interact with the data rather than on how they will retrieve data from APIs (that comes in a later task). Remember to build reusable components and keep them small.

import { useState } from "react";
import { SearchResults } from "./SearchResults";

export function RunSearch() {
    return <SearchResults />;
}

export function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");

    function handleTerm(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        setSearchTerm(e.target.value);
        // let search = setSearchTerm;
    }

    function handleSearchClick() {
        setSearchTerm("")
        console.log(searchTerm);
        return searchTerm;
    }

    return (
        <div id="centered">
            <input value={searchTerm} id="search" onChange={handleTerm} type="text" name="search" placeholder="What do you want to listen to?" />
            <button onClick={handleSearchClick}>Search Spotify</button>
        </div>
    );
}
