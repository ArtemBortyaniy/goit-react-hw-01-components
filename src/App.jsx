import { ThemeProvider } from '@emotion/react'
import user from 'database/user';
import data from 'database/data';
import friends from 'database/friends'
import transactions from 'database/transactions'
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import { theme } from './constants/theme';

const App = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
    </>
  );
};

export default App;
