import styled from "@emotion/styled";

export const ItemFriend = styled.li`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 10px;
    box-shadow: 2px 2px 2px black;
    background-color: ${({theme}) => (theme.colors.white)};
`;

export const OnlineFriend = styled.span`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({theme, isOnline}) => (isOnline ? theme.colors.green : theme.colors.red)};
    margin-right: 10px;
`;

export const AvatarFriend = styled.img`
    width: 48px;
    margin-right: 10px;
`;

export const NameFriend = styled.p`
    
`;