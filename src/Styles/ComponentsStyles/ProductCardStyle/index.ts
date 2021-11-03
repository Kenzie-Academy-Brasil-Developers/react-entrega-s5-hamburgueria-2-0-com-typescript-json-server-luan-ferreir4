import styled from "styled-components";

export const PdtCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  height: 346px;
  width: 290px;

  border: 3px solid var(--gray-light);
  border-radius: 5px;
  margin: 10px 5px;
  
  .imgContainer {
    height: 150px;
    width: 285px;
    background-color: var(--gray-light);
    border-radius: 5px 5px 0 0;
  }

  .info{
    margin-top: 10px;
    line-height: 36px;
    padding: 0 10px;
    .title{
      font-size: 20px;
    }
    .category{
      color: var(--gray-medium);
      font-size: 16px;
    }
    .price{
      font-weight: 800;
      font-size: 18px;
      color: var(--color-primary);
    }
  }
  button {
    position: absolute;
    bottom: 5%;
    left: 2%;

    height: 40px;
    width: 106px;

    background-color: var(--gray-medium);
    color: #fff;
    border-radius: 8px;
  }
  
  &:hover {
    border-color: var(--color-primary);
    button{
      background-color: var(--color-primary);
    }
  }
`;
