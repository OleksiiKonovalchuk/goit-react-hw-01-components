import React from 'react';
import css from './friend-list-item.module.css';
import PropTypes from 'prop-types';
const FriendListItem = ({ props }) => {
  const friends = props.map(({ avatar, name, isOnline, id }) => {
    const status = [`${css.marker} ${isOnline ? css.on : css.off}`];
    return (
      <li className={css.item} key={id}>
        <span className={status.join(' ')}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    );
  });
  return friends;
};
export default FriendListItem;

FriendListItem.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
