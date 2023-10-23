import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  position: relative;
  width: 100%;
  max-width: 500px;
  min-width: 300px;
  z-index: 10;
`;

export const WrapperFake = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: transparent;

`;
