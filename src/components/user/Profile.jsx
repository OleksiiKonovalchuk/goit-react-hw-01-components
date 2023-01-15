import React from "react";
import css from "./Profile.module.css";
import PropTypes from 'prop-types';
const Profile = ({ userName, tag, location, avatarUrl, stats }) => {
  return (<div className={css.profile}>
    <div className={css.description} >
    <img
      src={avatarUrl}
      alt="User avatar"
        className={css.avatar}
        
    />
      <p className={css.name}>{userName}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.item}>
      <span className={css.label}>Followers </span>
        <span className={css.quantity}>{stats.followers}</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>Views </span>
        <span className={css.quantity}>{stats.views}</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>Likes </span>
        <span className={css.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>)
}
export default Profile;
Profile.propTypes = {
  userName: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatarUrl: PropTypes.string,
  stats: PropTypes.shape({
    followers:  PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  })
}