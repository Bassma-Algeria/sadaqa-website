import styled from "styled-components";

const Container = styled.div`
  margin: auto;
  max-width: 1050px;
  padding-bottom: 80px;

  @media only screen and (max-width: 1050px) {
    padding: 0 20px;
  }
  @media only screen and (max-width: 400px) {
    padding: 0 5px;
  }
`;

const HeroContainer = styled(Container)`
  max-width: 1400px;
  padding-bottom: 0;
`;

export { Container, HeroContainer };
