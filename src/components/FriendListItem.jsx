import PropTypes from 'prop-types';

const FriendListItem = ({ item }) => {
    return (
            <li className="item" key={item.id}>
                <span className="status">{item.isOnline}</span>
                <img className="avatar" src={item.avatar} alt={item.name} width="48" />
                <p className="name">{item.name}</p>
            </li>
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

