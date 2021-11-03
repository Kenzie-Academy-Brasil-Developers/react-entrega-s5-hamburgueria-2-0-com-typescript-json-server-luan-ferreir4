import styled from "styled-components";

export const TopBarContainer = styled.header`
  .title {
    display: none;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 10px;
  background-color: var(--gray-light);

  @media (min-width: 768px) {
    .title {
      display: block;
    }
  }
`;

export const NavButtons = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-evenly;

  button {
    color: var(--gray-dark);
    font-size: 20px;
    background-color: transparent;
  }
  @media (min-width: 768px) {
    flex-grow: 0;
    width: 110px; 
    justify-content: flex-end;
    margin: 0;
    button {
      font-size: 26px;
      margin-right: 15px;
    }
  }
  @media (min-width: 1024px) {
    width:  150px;
    justify-content: space-between;
    margin: 0 10px 0 0;
    button {
      width: 48%;
      font-size: 26px;
    }
  }
`;
