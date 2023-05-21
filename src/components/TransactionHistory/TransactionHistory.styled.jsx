import styled from "@emotion/styled";

export const Table = styled.table`
    background-color: ${props => {
        return props.theme.colors.white;
    }};
    width: 344px;
    border-spacing: 0px;
`;

export const Thead = styled.thead`
    
`;

export const Tr = styled.tr`
   
`;

export const ThTitle = styled.th`
    border : 1px solid grey;
    background-color: ${props => (props.theme.colors.blue)};
`;

export const Tbody = styled.tbody`
    
`;

export const TdValue = styled.td`
    border : 1px solid ${props => (props.theme.colors.grey)};
    padding-left: 35px;
`;