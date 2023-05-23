import FriendListItem from '../FriendListItem/FriendListItem';
import { ListFriends } from './FriendList.styled';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
    return (
        <ListFriends>
            {friends.map(friend => (
                <FriendListItem item ={ friend } key={friend.id}/>
            ))}
        </ListFriends>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
  };
    
export default FriendList;