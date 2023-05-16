import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map(friend => (
                <FriendListItem item ={ friend }/>
            ))}
        </ul>
    )
}

export default FriendList;