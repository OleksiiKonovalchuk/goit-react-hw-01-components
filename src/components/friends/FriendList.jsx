import React from "react";
import css from "./friend-list.module.css";
import FriendListItem from './FriendListItem';
const FriendList = ({list}) => { return (
  <ul className={css.list}>
    <FriendListItem props={list} /> 
</ul>)
}
export default FriendList;