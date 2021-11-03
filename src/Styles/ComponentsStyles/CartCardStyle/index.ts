import styled from "styled-components";

export const CartCardContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  height: 48px;
  padding: 0 10px;
  margin: 10px 0;

  border: 3px solid var(--gray-light);
  border-radius: 5px;

  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 55%;
    .title {
      font-size: 15px;
      font-weight: 400;
    }
    .price {
      font-weight: 600;
      font-size: 18px;
      color: var(--color-primary);
    }
  }
  button {
    position: absolute;
    top: 50%;
    right: 2%;
    transform: translateY(-50%);
    height: 30px;
    width: 65px;

    background-color: var(--gray-medium);
    color: #fff;
    border-radius: 5px;
    font-size: 12px;
    &:hover {
      background-color: var(--color-secondary);
    }
  }
  @media(max-width: 767px){
    flex-direction: column;
    align-items: flex-start;
    height: 100px;
    padding: 5px 10px;
    .info{
      width: 100%;
    }
    button{
      top: 76%;
      right: 5%;

    }
  }
`;
