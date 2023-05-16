// import React from 'react';
import user from '../database/user';
import data from '../database/data';
import friends from '../database/friends'
import transactions from '../database/transactions'
import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';

export const App = () => {
  return (
    <div>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data}/>
    <FriendList friends={friends}/>
    <TransactionHistory items={transactions}/>
    </div>
  );
};
