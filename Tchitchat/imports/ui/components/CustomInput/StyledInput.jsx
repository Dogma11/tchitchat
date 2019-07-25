import styled from 'styled-components';
import colors from '/imports/utils/colors';

const StyledInput = styled.input`
  font-size: 2em;
  outline: none;
  border: none;
  border-bottom: 1px solid ${({ color }) => colors(color)};
  color: ${({ color }) => colors(color)};
`;

export default StyledInput;