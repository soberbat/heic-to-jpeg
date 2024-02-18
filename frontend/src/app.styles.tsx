import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Ubuntu", sans-serif;
  background-color: #161616;
  color: black;

  background-color: #090c9b;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #00000095;
  backdrop-filter: blur(20px);
  z-index: -1;
`;

export const FloatingWrap = styled.div`
  border: 1px solid #3066be;
  border-radius: 12px;
  padding: 1rem;
`;

export const InnerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
`;

export const ConvertButton = styled.div`
  width: 30%;
  background-color: #fffaff;
  border-radius: 6px;
  margin: 0 auto;
  color: #3c3744;
  font-weight: 300;
  text-align: center;
  margin-right: 2vw;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  cursor: pointer;
`;

export const FileInput = styled.input.attrs({ type: "file" })`
  padding: 0;
  margin: 0 auto;
  color: #fffaff;

  &::file-selector-button {
    background-color: transparent;
    border: none;
    font-weight: 300;
    font-family: "Ubuntu", sans-serif;
    color: #3c3744;
    background-color: #fffaff;
    border-radius: 6px;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    margin-right: 1rem;
    cursor: pointer;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ConvertedFile = styled(FlexContainer)`
  width: 50%;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-left: 1rem;
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-left-color: #7983ff;
  animation: ${spin} 1s linear infinite;
`;
