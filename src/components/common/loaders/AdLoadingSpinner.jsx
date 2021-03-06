import styled from "styled-components";

const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    position: absolute;
    border: 4px solid black;
    opacity: 1;
    /* transform: translate(-50%); */
    border-radius: 50%;
    animation: lds-ripple 1.5s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 40px;
      left: 40px;
      width: 0%;
      height: 0%;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }
`;

const AdLoadingSpinner = () => (
  <Container>
    <div></div>
    <div></div>
  </Container>
);

export { AdLoadingSpinner };
