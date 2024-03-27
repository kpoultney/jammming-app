import { useCallback, useState } from "react";

export function SearchBar(props: any) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleTerm = useCallback((event: any) => {
        setSearchTerm(event.target.value);
      },[]);

    const search = useCallback(() => {
        props.onSearch(searchTerm);
        console.log(searchTerm);
    }, [props.onSearch, searchTerm]);

    return (
        <div id="centered">
            <input value={searchTerm} id="search" onChange={handleTerm} placeholder="What do you want to listen to?" />
            <button onClick={search}>Search Spotify</button>
        </div>
    );
}