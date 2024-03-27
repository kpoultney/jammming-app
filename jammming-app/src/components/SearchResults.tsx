//these components should be static and may contain mock data. At this point, you should focus on how your components will interact with the data rather than on how they will retrieve data from APIs (that comes in a later task). Remember to build reusable components and keep them small.

import React from 'react';
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
