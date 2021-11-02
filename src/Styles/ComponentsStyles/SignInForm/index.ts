import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: inherit;
  height: 440px;
  padding: 20px;
  border: 1px solid var(--gray-light);
  border-radius: 5px;

  h3{
    font-size: 18px;
    margin-bottom: 20px;
  }
`;
export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  button{
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

  small{
    color: var(--gray-medium);
    margin-bottom: 18px;
  }
  button{
    height: 55px;
    .link{
      text-decoration: none;
      color: var(--gray-dark);
    }
  }

`;