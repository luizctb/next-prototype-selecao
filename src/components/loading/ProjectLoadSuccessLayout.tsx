"use client";

import styled from "styled-components";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

export const StyledText = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;     
`;

export const BoxProgress = styled(Box)`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const StyledTypography = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
  font-weight: 600;
  font-size: 17px;
  line-height: 28.22px;
  color: #000000;
  text-transform: none;  
  margin: 0;
  padding: 0;
`;

export const SuccessTypography = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
  font-weight: 800;
  font-size: 21px;
  line-height: 28.22px;
  color: #000000;
  text-transform: none;
  margin: 0;
  padding: 0;
`;

export const InfoTypography = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
  font-weight: 600;
  font-size: 17px;
  line-height: 28.22px;
  color: #000000;
  text-transform: none;
  margin-top: 8px;
  padding: 0;
`;

export const Container = styled.div`
   width: 410px;
   height: 156px;
   position: absolute;
   top: 50%;
   left: 50%;   
   transform: translate(-50%, -50%);
   border: none;       
   display: flex;
   justify-content: center;
   align-items: center;    
   background-color: transparent;    
`;

export const CustomCircularProgress = styled(CircularProgress)`
  width: 90px;
  height: 90px;
  color: #E08214; 
  margin-bottom: 8px; 
`;

export const CustomCheckCircleRoundedIcon = styled(CheckCircleRoundedIcon)`
  width: 79px;
  height: 79px;
  color: #0C8610; 
  margin-bottom: 8px; 
`;
