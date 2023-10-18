import { useEffect, useState } from 'react';
import './App.css';

import RoomCard from './components/RoomCard.tsx';
import Alert from './components/Alert.tsx';


function App() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    fetch('https://wetransfer.github.io/rooms.json')
      .then((res) => {
        if(res.ok) {
          return res.json();
        }
        return false;
      })
      .then((data: { rooms: Room[] } | false) => {
        if(data) {
          setRooms(data.rooms)
          setLoading(false)
        }
      })
  }, [])

  const handleBook = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000)
  }

  return (
    <div className="container">
      <h1 className="">Rooms</h1>
      <p className="subhead">
        Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor ultricies donec risus sodales. Tempus quis et.
      </p>

      {showAlert && <Alert type="success">Room booked!</Alert>}

      {isLoading && <>loading...</>}

      {!isLoading &&
        <ul className="rooms-list">
          {rooms.map((room) => (<RoomCard key={room.name} as="li" room={room} onBook={handleBook}></RoomCard>))}
        </ul>
      }
    </div>
  )
}

export default App
