import PropTypes from 'prop-types';
import { ItemFriend, OnlineFriend, AvatarFriend, NameFriend } from './FriendListItem.styled'

const FriendListItem = ({ item }) => {
    return (
            <ItemFriend>
                <OnlineFriend isOnline= {item.isOnline}></OnlineFriend>
                <AvatarFriend src={item.avatar} alt={item.name}></AvatarFriend>
                <NameFriend>{item.name}</NameFriend>
            </ItemFriend>
    )
}

FriendListItem.propTypes = {
    item: PropTypes.shape({
          avatar: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          isOnline: PropTypes.bool.isRequired,
          id: PropTypes.number.isRequired,
        }).isRequired,
}

export default FriendListItem;

