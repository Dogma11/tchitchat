import styled from 'styled-components';
import colors from '/imports/utils/colors';

const StyledSelect = styled.select`
  font-size: 6em;
  outline: none;
  border: none;
  border-bottom: 1px solid ${({ color }) => colors(color)};
  color: ${({ color }) => colors(color)};
  
  > option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export default StyledSelect;
