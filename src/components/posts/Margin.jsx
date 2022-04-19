import styled from "styled-components";

const Margin = styled.div` 
  margin-left: 20%;
  padding: 80px 10px 50px 10px;

  @media only screen and (max-width: 1200px) {
    margin-left: 250px; 
  }

  @media only screen and (max-width: 900px) {
    padding: 0;
    margin: auto;
    padding-top: 50px;
  }
`;

export default Margin;
