import styled from "styled-components";

export const TopContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  @media (min-width: 1024px) {
    align-items: center;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  width: inherit;
  margin-bottom: 10px;
  h1 {
    font-size: 28px;
    color: var(--gray-dark);
    margin-right: 8px;
  }
  h2 {
    font-size: 20px;
    color: var(--color-secondary);
    margin-bottom: 2px;
  }
  @media (min-width: 1024px) {
    width: 300px;
    margin: 0;
    h1 {
      font-size: 34px;
    }
    h2 {
      font-size: 26px;
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 92vw;
  max-width: 480px;
  height: 95px;
  margin: 0 auto;
  border: 1px solid var(--gray-light);
  border-radius: 5px;

  div {
    background-color: var(--gray-light);
    height: 60px;
    width: 60px;
    line-height: 65px;
    text-align: center;
    font-size: 24px;
    color: var(--color-primary);
    border-radius: 5px;
  }

  p {
    width: 70%;
    text-align: left;
    font-size: 14px;
    line-height: 22px;
    color: var(--gray-medium);
  }
  @media (min-width: 1024px) {
    margin-top: 40px;
  }
`;
