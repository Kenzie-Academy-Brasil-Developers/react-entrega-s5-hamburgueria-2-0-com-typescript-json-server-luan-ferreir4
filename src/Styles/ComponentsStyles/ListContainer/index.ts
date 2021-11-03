import styled from "styled-components";

export const PdtListContainer = styled.section`
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
    width: 82vw;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    width: 72vw;
  }
`;

export const CartListContainer = styled.section`
  margin: 10px auto 10%;
  
  overflow: hidden;
  overflow-y: scroll;
  height: 80%;
  width: 90%;
  @media (min-width: 1024px) {
    /* width: 70%;
    justify-content: flex-start;
    margin: 10px 0 15px 10px; */
  }
`;