import styled from 'styled-components';

export const ReposContainer = styled.div`
  display: grid;
  grid: auto / auto auto;
  gap: 3rem 6rem;
  place-content: center;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
