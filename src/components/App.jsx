import React from 'react';
import css from './App.module.css';

import Profile from './user/Profile';
import user from './user/user.json';
import Statistics from './statistics/Statistics';
import data from './statistics/data.json';
import FriendList from './friends/FriendList';
import friends from './friends/friends.json';
import TransactionHistory from './transactions/TransactionHistory';
import transactions from './transactions/transactions.json';
export const App = () => {
  return (
    <div className={css.App}>
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatarUrl={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload Stats" stats={data} />
      <FriendList list={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
