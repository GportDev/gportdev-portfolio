import styled from 'styled-components';

export const PageContainer = styled.div`
  max-width: 1170px;
  padding: 0 2rem;
  gap: 7rem;
  margin: 6rem 0;
  @media (max-width: 800px) {
    margin: 3rem 0;
  }
`;

export const BaseSection = styled.section`
  display: flex;
  text-align: center;
  justify-content: space-between;
  margin-bottom: var(--sectionSpacer);

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ColumnBaseSection = styled(BaseSection)`
  flex-direction: column;
`;
