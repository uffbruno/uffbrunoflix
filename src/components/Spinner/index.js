import styled, { keyframes } from '../../../node_modules/styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  animation: ${rotate} 2s linear infinite;
`;

export default Spinner;
