import FriendListItem from '../FriendListItem/FriendListItem';
import { ListFriends } from './FriendList.styled';

const FriendList = ({ friends }) => {
    return (
        <ListFriends>
            {friends.map(friend => (
                <FriendListItem item ={ friend }/>
            ))}
        </ListFriends>
    )
}

export default FriendList;