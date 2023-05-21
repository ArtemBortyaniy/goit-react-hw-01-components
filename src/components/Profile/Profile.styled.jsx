import styled from '@emotion/styled'

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => {
        return props.theme.colors.white;
    }};
    max-width: 344px;
`;

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Avatar = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-bottom: 20px;
    margin-top: 20px;
`

export const Name = styled.p`
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 10px;
    color: ${props => (props.theme.colors.black)};
`;

export const Tag = styled.p`
    font-size: 18px;
    margin-bottom: 10px;
    color: ${props => (props.theme.colors.black)};
`;

export const Location = styled.p`
    font-size: 18px;
    margin-bottom: 10px;
    color: ${props => (props.theme.colors.black)};
`;

export const List = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    padding: 10px 29px 10px 29px;
    border: 1px solid ${props => (props.theme.colors.grey)};
`;

export const TitleStat = styled.span`
    margin-bottom: 10px;
    font-size: 18px;
    color: ${props => (props.theme.colors.black)};
`;

export const QuantityStat = styled.span`
    font-size: 18px;
    color: ${props => (props.theme.colors.black)};
`;