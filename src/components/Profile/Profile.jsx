import PropTypes from 'prop-types';
import { ProfileContainer, DescriptionContainer, Avatar,Name, Tag, Location, List, Item, TitleStat, QuantityStat } from './Profile.styled';

const Profile = ({ 
    username, 
    tag, 
    location,
    avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png', 
    stats : { followers, views, likes } }) => {
    return (
    <ProfileContainer>
    <DescriptionContainer>
        <Avatar src={avatar} alt='user avatar'></Avatar>
        <Name>{ username }</Name>
        <Tag>@{ tag }</Tag>
        <Location> { location } </Location>
    </DescriptionContainer>

    <List>
        <Item>
            <TitleStat>Followers</TitleStat>
            <QuantityStat>{ followers }</QuantityStat>
        </Item>
        <Item>
            <TitleStat>Views</TitleStat>
            <QuantityStat>{ views }</QuantityStat>
        </Item>
        <Item>
            <TitleStat>Likes</TitleStat>
            <QuantityStat>{ likes }</QuantityStat>
        </Item>
    </List>
    </ProfileContainer>
    );
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  };

export default Profile;