import './RoomCard.css';

function RoomCard({ room, as, onBook }: RoomCard) {
    const As = as === 'li' ? 'li': 'div';

    return <As className="room-card">
        <img src={room.thumbnail} alt={`${room.name} room. Meaningful alt text describing the room in detail.`}/>
        <div className="room-details">
            <div>
                <p className="room-name">{room.name}</p>
                <p className="room-spots">{room.spots} spots remaining</p>
            </div>
            <button className="cta" onClick={onBook}>Book!</button>
        </div>
    </As>;
}

export default RoomCard;