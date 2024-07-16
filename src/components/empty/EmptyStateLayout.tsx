"use client";

import { Typography } from "@mui/material";
import { styled } from "styled-components";

export const Box = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* background-color: transparent; */
  background-color: #12c238;
  width: 391px;
  height: 360px;
  top: 173px;
  left: 50%;  
  transform: translateX(-50%);
  border-radius: 5px;  
  position: absolute;
  
  image{
    width: 309px;
    height: 254px;
    top: 173;
    left: 564;    
  }

  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    transform: none;
  }
`;

export const CustomTypographyOne = styled(Typography)`
   color: #FFFFFF;
   font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   font-weight: 700;
   font-size: 32px;
   line-height: 38.4px;   
   text-transform: none;    
`;

export const CustomTypographyTwo = styled(Typography)`
   color: #FFFFFF;
   font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   font-weight: 500;
   font-size: 23px;
   line-height: 27.6px;   
   text-transform: none;  
`;


