import styled from "styled-components";

export const InputBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  width: inherit;
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


