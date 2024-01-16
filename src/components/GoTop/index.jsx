import * as Styled from './styled';
import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp';

export const GoTop = () => {
  return (
    <Styled.Container
      href="#"
      aria-label="Ir para o inicio"
      title="Voltar para o começo"
    >
      <KeyboardArrowUp />
    </Styled.Container>
  );
};
