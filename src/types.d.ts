interface Room {
  name: string;
  spots: string;
  thumbnail: string;
}

interface RoomCard {
  room: Room;
  as: 'li' | 'div';
  onBook: MouseEventHandler<HTMLButtonElement>
}

interface AlertProps {
  type: 'success' | 'error';
  children: React.Node;
}