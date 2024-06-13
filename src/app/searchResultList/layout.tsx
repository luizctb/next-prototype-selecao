"use client";

import styled from "styled-components";

export const PageContainer = styled.section`
   background-color: #000000CC; 
   width: 100%;
   height: 100%;
   min-height: 100vh;
`;

export const HomeBody = styled.section`
   display: grid;
   grid-template-columns: repeat(2, 1rf);   
   grid-gap: 10px;
   margin: 0 auto;
   width: 80%;   
`;
