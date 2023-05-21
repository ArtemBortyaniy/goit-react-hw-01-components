import styled from "@emotion/styled";
import { getRandomHexColor } from '../../utils/getRandomColor'

export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${props => {
        return props.theme.colors.white;
    }};
    max-width: 344px;
`;

export const TitleStatistics = styled.h2`
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 26px;
    font-weight: 600;
    color: ${props => (props.theme.colors.black)};
`;

export const ListStatistics = styled.ul`
    display: flex;
`;

export const ItemStatistics = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 17.8px;
    background-color: ${(getRandomHexColor)};
`;

export const Label = styled.span`
  
`;

export const Percentage = styled.span`
    
`;