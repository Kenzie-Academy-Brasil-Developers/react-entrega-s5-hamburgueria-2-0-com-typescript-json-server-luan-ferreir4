import styled from "styled-components";

export const Page = styled.div`
  .top{
    display: none;
  }

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 92vw;
  max-width: 1200px;
  padding: 25px 0;
  margin: 0 auto;
  background-color: #fff;
  @media(min-width: 1024px){
    .top{
    display: unset;
    }

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
  }
`;
