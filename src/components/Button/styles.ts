import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonElement = styled.button`
  width: 13rem;
  height: 3.5rem;
  font-size: var(--h2Mobile);
  font-weight: 500;

  background-color: var(--lightBlue);

  border: none;
  border-radius: 0.5rem;
  box-shadow: var(--simpleShadow);

  cursor: pointer;

  :hover {
    font-weight: 700;
    color: #fff;
    background-color: var(--aquaGreen);
    text-shadow: 0px 0px 8px rgba(256, 256, 256, 0.25);
    box-shadow: var(--simpleShadow), 0px 0px 24px rgba(148, 243, 228, 0.35);
    transition: 0.2s ease;
  }
`;
