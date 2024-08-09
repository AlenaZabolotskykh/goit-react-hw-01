import FriendListItem from "../FriendListItem/FriendListItem";
import friends from "../../friends.json";

export default function FriendList() {
  return (
    <ul>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id}>
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            id={id}
          />
        </li>
      ))}
    </ul>
  );
}
