import styled from "styled-components";

export const InputBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  width: inherit;

  small {
    margin: 3px 0 0 10px;
    color: var(--feedback-error);
  }
`;

export const InputContainer = styled.input`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  height: 60px;
  width: inherit;
  padding: 0 10px;

  border: 2px solid var(--gray-dark);
  border-radius: 8px;
`;
export const SearchInputBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 40px;
  width: 65vw;
  margin: auto 0;
  padding: 0 3px;
  background-color: var(--gray-x-light);
  border: 1px solid #000;
  border-radius: 5px;

  @media (min-width: 768px) {
    width: 350px;
    margin: auto 0 auto 50px;
  }
  @media (min-width: 1024px) {
    width: 450px;
    margin: auto 0 auto 100px;
  }
`;
export const SearchInputContainer = styled.input`
  height: 90%;
  width: 100%;
  outline: none;
  background-color: var(--gray-x-light);
`;
export const IconBox = styled.button`
  position: absolute;
  right: 1%;
  height: 90%;
  width: 40px;
  background-color: var(--color-primary);
  border-radius: 5px;
  line-height: 35px;
  text-align: center;
`;
