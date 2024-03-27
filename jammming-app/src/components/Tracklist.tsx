import Track from "./Track";

const TrackList = (props: any) => {
    return (
        <div className="TrackList">
            {props.tracks.map((track: any) => {
                return (
                    <Track
                    track={track}
                    key={track.id}
                    onAdd={props.onAdd}
                    isRemoval={props.isRemoval}
                    onRemove={props.onRemove}
                    />
                );
            })}
        </div>
    )
}

export default TrackList;