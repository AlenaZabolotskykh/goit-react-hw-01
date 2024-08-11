import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.item}>
      <img src={avatar} alt="Avatar" width="70" />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.active, isOnline ? css.isActive : css.isRetired)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
