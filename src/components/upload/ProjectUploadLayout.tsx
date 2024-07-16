"use client";

import Button from "@mui/material/Button";
import { styled } from "styled-components";
import UploadFileIcon from '@mui/icons-material/UploadFile';

export const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1;
`;

export const StyledText = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;     
`;

export const StyledButton = styled(Button)`  
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: none;
  color: #000000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
  font-weight: 400;
  font-size: 14px;
  line-height: 19.07px;  
  text-transform: none;    
  width: 200px;
  height: 130px;
  background-color: transparent;  
  transition: 1s;

  .MuiButton-startIcon {
    margin-bottom: 8px;    
  }  

  &:hover {
      background-color: #ffffff;
    }

  &:focus {
      outline: none;       
    }   
`;

export const CustomUploadFileIcon = styled(UploadFileIcon)`
  width: 41px;
  height: 48px;
  color: #E08214; 
  margin-bottom: 8px; 
`;

export const StyledTypography = styled('p')`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
  font-weight: 400;
  font-size: 12px;
  line-height: 16.34px;
  color: #232323;
  text-transform: none;
  margin-top: 8px;  
`;

export const Container = styled.div`
   width: 864px;
   height: 181px;
   position: absolute;
   top: 50%;
   left: 50%;   
   top: 144px;
   left: 288px;
   border: 3px;
   border-color: #666F45;
   border-radius: 5px;   
   border-style: dashed;   
   display: flex;
   justify-content: center;
   align-items: center;        
   gap: 10px;
   background-color: transparent;  
   padding: 31px; 
`;
