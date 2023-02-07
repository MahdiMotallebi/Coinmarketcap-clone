'use client';

import React from 'react';

//components
import { useGlobalContext } from '../context';

//styles
import styled from 'styled-components';
import { tokens } from '../../styles/themeConfig';

interface PropsBtn {
  bg: string;
}
const Btn = styled.button<PropsBtn>`
  background-color: ${(p) => p.bg};
`;

const Header = () => {
  const { mode, toggleThemeHandler } = useGlobalContext();
  const colors = tokens(mode);

  return (
    <Btn bg={colors.grey[300]} onClick={toggleThemeHandler}>
      {mode}
    </Btn>
  );
};

export default Header;
