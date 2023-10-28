import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  position: fixed;
  width: 100%;
  max-width: 500px;
  min-width: 350px;
  height: fit-content;
  top: 0;
  background-color: white;
  z-index: 9;
  /* box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.04) !important; */
`;

export const Container = styled.div`
  display: flex;
  padding: 24px 24px 0;
  z-index: 1;
  cursor: pointer;
`;

export const WrapperFake = styled.div`
  top:0;
  left:0;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  z-index: 4;
`;
