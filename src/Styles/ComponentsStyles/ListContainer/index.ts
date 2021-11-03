import styled from "styled-components";

export const ListContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 90vw;
  margin: 20px auto;
  @media (min-width: 500px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-left: 9%;
  }

  @media (min-width: 1024px) {

  }
`;