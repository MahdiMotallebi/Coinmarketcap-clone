'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
      *,
      *::before,
      *::after{
          padding: 0;
          margin: 0;
          box-sizing: border-box;
      }

      body{
          height: 100vh;
          width: 100vw;
          overflow-x: hidden;
          background-color: ${({ theme }) => theme.background.default};
          
          
      }

  `;
