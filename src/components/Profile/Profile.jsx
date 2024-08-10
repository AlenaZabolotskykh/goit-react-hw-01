import css from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.card}>
      <div>
        <img className={css.img} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.title}>Followers</span>
          <span className={css.text}>{followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.title}>Views</span>
          <span className={css.text}>{views}</span>
        </li>
        <li className={css.item}>
          <span className={css.title}>Likes</span>
          <span className={css.text}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
