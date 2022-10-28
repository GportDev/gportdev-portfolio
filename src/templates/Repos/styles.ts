import styled from 'styled-components';

export const ReposContainer = styled.div`
  display: grid;
  grid-template-columns: 32rem 32rem;
  gap: 3rem 6rem;
  place-content: center;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 3rem;
  }
`;
