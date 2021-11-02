import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 92vw;
  max-width: 480px;
  padding: 20px;
  margin: 20px auto 0;
  border: 1px solid var(--gray-light);
  border-radius: 5px;

  h3 {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  button {
    height: 60px;
    width: 100%;
    padding: 0px 40px;
    background-color: var(--color-primary);
    color: var(--gray-x-light);
    border-radius: 8px;
  }
`;
export const FooterForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 18px 0 10px;
  width: 100%;
  small {
    color: var(--gray-medium);
    margin-bottom: 18px;
  }
  button {
    height: 55px;
    color: var(--gray-dark);
    border: 1px solid var(--gray-light);
    border-radius: 8px;
  }
`;
