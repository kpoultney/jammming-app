import TrackList from './Tracklist';

const SearchResults = (props: any) => {
  return (
    <div>
      <p>
        <TrackList tracks={props.searchResults} onAdd={props.onAdd} />
      </p>
    </div>
  );
}

export default SearchResults;
