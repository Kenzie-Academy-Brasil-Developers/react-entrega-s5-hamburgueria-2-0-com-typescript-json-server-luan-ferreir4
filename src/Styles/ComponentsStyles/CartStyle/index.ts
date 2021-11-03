import styled from "styled-components";

export const CartBg = styled.div`
  position: fixed;
  top: 50%;
  left: 50%; 
  transform: translate(-50%, -50%); 

  height: 100vh;
  width: 100vw;
  background-color: rgba(112, 112, 112, 0.4);
`;

export const CartContainer = styled.div`
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 67vh;
  width: 75vw;
  max-width: 800px;
  background-color: #fff;
  border-radius: 8px;

  .cartHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 44px;
    padding: 0 20px;
    
    background-color: var(--color-primary);
    color: #fff;
    border-radius: 8px 8px 0 0;

    .closeCart{
        padding: 3px 8px;
        background-color: var(--color-secondary);
        color: #fff;
        font-weight: 800;
        border-radius: 5px;
    }
  }
`;

export const TotalPriceContainer = styled.div`
  position: fixed;
  bottom: -15%;
  background-color: #fff;
  width: 60vw;
  max-width: 300px;
  padding: 10px 15px;
  border-radius: 7px;
  p{
    color: var(--color-primary);
    font-weight: 600;
  }
  
`;