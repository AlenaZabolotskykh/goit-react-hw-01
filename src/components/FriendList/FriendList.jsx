import FriendListItem from "../FriendListItem/FriendListItem";
import friends from "../../friends.json";
import css from "./FriendList.module.css";

export default function FriendList() {
  return (
    <ul className={css.list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={css.item} key={id}>
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
